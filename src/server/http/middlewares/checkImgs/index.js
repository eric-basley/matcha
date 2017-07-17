
const checkImg = (req, res, next) => {
  let index = 0;

  // console.log(req.f);
  // new Image()
  // img.src = url;
  // onload()
  // console.log(req.files);
  // const picture = new Image();
  // req.files.map(img => {
  //   if (img.mimetype.slice(0, 5) !== 'image') index = -1;
  //     // picture.src = img; 
  // });
  // if (index === -1) return next({ details: 'wrong file' });
  next();
};

export default checkImg;
