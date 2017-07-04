import { checkAuth } from './hooks';
import { ifAlreadyLiked, ifCanLike, ifConnected } from './hooks/likes';
import likes from '../models/likes';

const service = {
  name: 'likes',
  addLike({ from, to, push }) {
    const data = { from_user: from, to_user: to, date: Date.now(), push };
    return likes.add(data);
  },
  unLike({ from, to }) {
    return likes.delete(from, to);
  },
};

const init = (evtx) => evtx
  .use(service.name, service)
  .service(service.name)
  .before({
    addLike: [checkAuth, ifCanLike, ifAlreadyLiked, ifConnected],
    unLike: [checkAuth, ifCanLike],
  })
  .after({
  });

export default init;
