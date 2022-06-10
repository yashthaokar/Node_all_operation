// // Route level middleware, apply middleware on single route, make middleware in different file, apply middleware i the group of route.

// const express = require("express");
// const req = require("express/lib/request");
// const app = express();
// const PORT = process.dotenv || 5000;
// const reqFilter = require('./middleware')// we created middleware in separate file becuae its for utility.
// // we created and imported middleware. we are using this on only user and contact us route page only.

// const route= express.Router()// we use this when we want to add middleware in mulitple routes.
// route.use(reqFilter)

// app.get("/", (req, res) => {
//   res.send("<h1> THis is Home page</h1>");
// });

// // app.get("/user",reqFilter, (req, res) => {
// //     res.send("<h1> THis is User page</h1>");
// //   });//we added route level middleware 

// route.get("/user",reqFilter, (req, res) => {
//   res.send("<h1> THis is User page</h1>");
// });//we added route level middleware 

// route.get("/contact", (req, res) => {
//     res.send("<h1> THis is contact page</h1>");
//   });  //we added route level middleware 

//   app.use('/', route)

// app.listen(PORT, () => {
//   console.log(`Hello, your server running on ${PORT}`);
// });


