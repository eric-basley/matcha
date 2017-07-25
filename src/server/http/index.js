import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import logger from 'koa-logger';
import Router from 'koa-router';
import { checkToken, getToken, getUser } from './middlewares';
import sendTokenResetPassword from './sendTokenResetPassword';
import confirmEmail from './confirmEmail';
import resetPassword from './resetPassword';

const getUrl = server => `http://${server.address().address}:${server.address().port}`;

const init = (ctx) => {
  const app = new Koa();
  const router = new Router();
  const { server: { host, port } } = ctx.config;

  router
    .get('/ping', ctx => ctx.body = ({ ping: 'pong' })) // eslint-disable-line
    .get('/confirm_email', getToken, getUser(ctx.config), confirmEmail)
    .get('/lost_password', sendTokenResetPassword(ctx))
    .post('/reset_password', getToken, checkToken, resetPassword);

  app
    .use(bodyParser())
    .use(logger())
    .use(router.routes())
    .use(router.allowedMethods());
  const httpServer = app.listen(port, host, () => {
    httpServer.url = getUrl(httpServer);
    console.log(`Connected ${httpServer.url}`); // eslint-disable-line no-console
  });
  return ({ ...ctx, http: httpServer });
};

export default init;
