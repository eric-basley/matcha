import { checkAuth, getToken } from './hooks';
import { ifAlreadyLiked } from './hooks/likes';

const service = {
  name: 'likes',
  add(id) {
    // console.log(this.globals);
    return Promise.resolve({});
  },
};

const init = (evtx) => evtx
  .use(service.name, service)
  .service(service.name)
  .before({
    add: [getToken, checkAuth, ifAlreadyLiked],
  })
  .after({
  });

export default init;
