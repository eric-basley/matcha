const getToken = () => (req, res, next) => {
  const token = req.query.matchaToken || req.body.matchaToken;
  console.log(token);
  req.matchaToken = token;
  next();
};

export default getToken;
