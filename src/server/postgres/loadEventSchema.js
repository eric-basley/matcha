const query = `CREATE TABLE IF NOT EXISTS likes (
  id SERIAL PRIMARY KEY,
  toUser VARCHAR NOT NULL,
  fromUser VARCHAR NOT NULL,
  date DATE,
  push BOOLEAN DEFAULT FALSE
);
ALTER SEQUENCE likes_id_seq RESTART WITH 1`;

const loadSchema = (ctx) => {
  const { db } = ctx;
  return db.none(query).then(() => ctx);
};

export default loadSchema;
