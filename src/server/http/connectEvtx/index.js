const getInput = (ctx) => Object.assign(ctx.query);

const getMessage = (ctx) => {
  const { request } = ctx;
  const re = new RegExp(/^\/(\w*)\/?(\w*)/);
  const [, service, method] = re.exec(request.url);
  const input = getInput(ctx);
  // console.log(service, method, input);
  return { service, method, input };
};

const connector = (evtx) => (ctx, next) => {
  return evtx
    .run(getMessage(ctx), { ctx })
    .then(() => next(ctx));
};

export default connector;
