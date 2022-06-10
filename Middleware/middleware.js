// middleware which contain 3 parametter req,res,next.
module.exports= reqFilter = (req, res, next) => {
    if (!req.query.age) {
      res.send("please provide your age. to go furthur your age must be 18+");
    }
    else if (req.query.age< 18) {
      res.send("your can not access this page you are under age");
    }  
    else {
      next();
    }
  };