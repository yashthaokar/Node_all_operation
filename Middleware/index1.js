// noraml or basic middleware.
// Application level middleware this middle ware will applicable for all route or pages.

// const express = require("express");
// const app = express();
// const PORT = process.dotenv || 5000;

// // middleware which contain 3 parametter req,res,next.
// const reqFilter = (req, res, next) => {
//   if (!req.query.age) {
//     res.send("please provide your age. to go furthur your age must be 18+");
//   }
//   else if (req.query.age< 18) {
//     res.send("your can not access this page you are under age");
//   }  
//   else {
//     next();
//   }
// }; // we created middleware.
// app.use(reqFilter); // we use middleware

// app.get("/", (req, res) => {
//   res.send("<h1> THis is Home page</h1>");
// });
// app.get("/user", (req, res) => {
//   res.send("<h1> THis is User page</h1>");
// });

// app.listen(PORT, () => {
//   console.log(`Hello, your server running on ${PORT}`);
// });
