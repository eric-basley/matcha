
export const ifAlreadyLiked = (ctx) => {
  const { globals: { models: { likes } }, input: { id } } = ctx;
  console.log(ctx);
  // return likes.ifAlreadyLiked(id)
  // console.log('checkIfConfirmed'); // eslint-disable-line
  // return users.load(id).then(user => {
  //   if (user.confirmed) {
  //     const { config: { httpCode: { error } } } = ctx.globals;
  //     return Promise.reject({ ...ctx, status: error });
  //   }
  //   return Promise.resolve({ ...ctx, input: id });
  // });
};
