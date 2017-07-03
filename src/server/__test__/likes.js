/* global before, it, describe */
/* eslint func-names: 0 */
import should from 'should';
import socketIOClient from 'socket.io-client';
import run from '../run';
import config from '../../../config';
import addFakeAccounts from '../postgres/__test__/addFakeAccounts';

describe.only('likes', () => {
  before(function () {
    return run(config)
      .then((ctx) => {
        const { users } = ctx.models;
        return users.deleteAll().then(() => ctx);
      })
      .then(addFakeAccounts)
      .then((ctx) => {
        const { http: { url } } = ctx;
        this.ctx = ctx;
        this.userId = 0;
        this.url = url;
        this.matchaToken = '';
      });
  });

  it('should add likes', function (done) {
    const data = 'pong';
    const message = {
      type: 'likes:add',
      payload: { data },
      replyTo: 'pong',
    };
    const io = socketIOClient.connect(this.url);
    io.emit('action', message);
    io.on('action', res => {
      console.log(res);
      done();
    });
  });
});
