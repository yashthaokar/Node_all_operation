// // const http= require('http')



// // http.createServer((req,res)=>{
// //  res.writeHead(200,{'content-Type':"application\json"})
// //  res.write(JSON.stringify({name:"yash", age:'24'}))
// //  res.end()
// // }).listen(4500);

// //------------------------------

// // const http = require('http')
// import http from 'http'
// const hostname = '127.0.0.1'
// const port = 3000

// const server = http.createServer((req, res) => {
//   res.statusCode = 200
//   res.setHeader('Content-Type', 'text/html')
//  if(req.url=='/'){
//   res.end("<h1>this is simple Home page</h1>")
//  }// we creat routing handleing by usig if else statements
//  else if(req.url=='/about'){
//   res.end("<h1>this is simple about page</h1>")
//  }
//  else{
//   res.end("<h1> sorry plese check you enter wrong url.</h1>")
//  }
  
// })


// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`)
// })