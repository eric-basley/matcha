import { register } from '.';

const likes = {
  load(id) {
    return this.db.one(`SELECT * FROM users WHERE id = ${id}`);
  },
};

export default register('likes', likes);
