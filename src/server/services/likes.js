
const service = {
  name: 'likes',
  add() {

  },
};

const init = (evtx) => evtx
  .use(service.name, service)
  .service(service.name)
  .before({
  })
  .after({
  });

export default init;
