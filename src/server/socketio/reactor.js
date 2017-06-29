import debug from 'debug';
import jwt from 'jsonwebtoken';
import R from 'ramda';

const logger = debug('matcha:socketio');

const formatServiceMethod = (ctx) => {
  const { service, method, message: { type, payload } } = ctx;
  if (service && method) return Promise.resolve(ctx);
  const [serv, meth] = type.split(':');
  // console.log(payload, serv, meth);
  return Promise.resolve({
    ...ctx,
    input: payload,
    service: serv,
    method: meth,
  });
};

const makeOutput = (payload, type) => ({ payload, type });

const formatResponse = (ctx) => {
  const { output, message: { replyTo } } = ctx;
  if (replyTo) {
    return Promise.resolve({
      ...ctx,
      output: makeOutput(output, replyTo),
    });
  }
  return Promise.resolve(ctx);
};

const getToken = (ctx) => {
  const { message: { matchaToken } } = ctx;
  return Promise.resolve({ ...ctx, matchaToken });
};

const getUserFromToken = (ctx) => {
  const { globals: { config: { secretSentence }, models: { users } }, matchaToken } = ctx;
  // const { config: { httpCode: { Unauthorized } } } = ctx.globals;
  if (!matchaToken) return Promise.resolve(ctx);
  const dataDecoded = jwt.verify(matchaToken, secretSentence);
  if (!dataDecoded) return Promise.resolve(ctx);
  return users.load(dataDecoded.sub).then(user => ({ ...ctx, user }));
};

class Reactor {
  constructor(evtx, io, secretKey, users) {
    this.io = io;
    this.secretKey = secretKey;
    this.evtx = evtx;
    this.users = users;
    this.sockets = {};
    this.initModels();
    this.initEvtX();
    this.initIo();
  }


  initModels() {
    const registerUser = ({ user, socket }) => {
      // console.log(socket);
      logger(`user ${user.firstname} logged in socket.id = ${socket.id}`);
      this.sockets[socket.id] = user;
    };
    const logoutUser = ({ user, socket }) => {
      logger(`user ${user.firstname} logged out`);
      delete this.sockets[socket.id];
    };
    this.users.on('login', registerUser);
    this.users.on('logout', logoutUser);
  }

  getConnectedUsers() {
    logger(this.sockets);
  }

  initEvtX() {
    this.evtx
      .before(formatServiceMethod, getToken, getUserFromToken)
      .after(formatResponse);
  }

  initIo() {
    const { evtx, io } = this;
    io.on('connection', (socket) => {
      socket.on('action', (message) => {
        logger(`receive ${message.type} action`);
        const localCtx = { io, socket };
        evtx.run(message, localCtx)
          .then((res) => {
            socket.emit('action', res);
            // this.getConnectedUsers();
            logger(`sent ${res.type} action`);
          })
          .catch((err) => {
            let res = {};
            if (!err.status) {
              res = { details: err.detail, routine: err.routine };
            } else res = { status: err.status };
            socket.emit('action', { type: 'EvtX:Error', ...res });
          });
      });
    });
  }
}

const init = (evtx, io, secretKey, users) => Promise.resolve(new Reactor(evtx, io, secretKey, users));

export default init;
