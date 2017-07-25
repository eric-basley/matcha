const getToken = async (ctx, next) => {
  const { matchaToken: token } = ctx.query || ctx.request.body;
  const { matchaToken } = ctx.request.body;
  ctx.matchaToken = matchaToken || token;
  await next();
};

export default getToken;
