import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import Router from 'koa-router';
import { checkToken, getToken, getUser, checkAuth } from './middlewares';
import sendTokenResetPassword from './sendTokenResetPassword';
import confirmEmail from './confirmEmail';
import logger from 'koa-logger';
import resetPassword from './resetPassword';

const getUrl = server => `http://${server.address().address}:${server.address().port}`;

const init =  (ctx) => {
  const app = new Koa();
  const router = new Router();
  const { server: { host, port }, secretSentence } = ctx.config;

  router
    .get('/ping', ctx => ctx.body = ({ ping: 'pong' })) // eslint-disable-line
    .get('/confirm_email', getToken, getUser(ctx.config), confirmEmail)
    .get('/lost_password', sendTokenResetPassword(ctx))
    .post('/reset_password', getToken, checkToken, resetPassword);
    // .post('/add_img',
    // upload.fields([{ name: 'imgs', maxCount: 4 }, { name: 'imgProfile', maxCount: 1 }]),
    // getToken(), checkAuth(secretSentence), addImg(users))

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

// import express from 'express';
// import compression from 'compression';
// import bodyParser from 'body-parser';
// import logger from 'morgan-debug';
// import cors from 'cors';
// import http from 'http';
// import path from 'path';
// import multer from 'multer';
// import { errors, checkToken, getToken, getUser, checkAuth } from './middlewares';
// import addImg from './addImg';

// const getUrl = server => `http://${server.address().address}:${server.address().port}`;

// const upload = multer({
//   dest: path.join(__dirname, '../../../public/uploads/'),
//   limits: {
//     fileSize: 2000000,
//     files: 5,
//   },
// });

// const init = (ctx) => {
//   const app = express();
//   const { server: { host, port }, secretSentence } = ctx.config;
//   const { models: { users } } = ctx;
//   const promise = new Promise(resolve => {
//     const httpServer = http.createServer(app);
//     app
//       .use(cors())
//       .use(compression())
//       .use(errors());
