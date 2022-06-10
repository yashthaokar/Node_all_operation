// const http= require ('http')
// const server= http.createServer((req,res)=>{
//    // res.send("this data send ")
//    // console.log(req.url);
//    // we are creating  routers for home route and about page route
//    if(req.url =='/'){
//       res.write("hello this is home page")
     
//       res.end('hello we end the respons')
//    }
//    else if (req.url=="/about"){
//       res.end("hello this is about page")
//    }
//    else if (req.url=="/contact"){
//       res.end("hello this is ContactUs page")
//    }
//    else{
//       res.writeHead(404,{ "Content-type":'text/html'})// this will show in console and netwrok tab.
//       res.end(' <h1>404 error page. this page, url is wrong </h1>')
//       //  res.end("alert:(Hello! I am an alert box!!)") 


      
//    }
// })

// server.listen(4500,'127.0.0.1' ,()=>{
//    console.log('server is started at port 4500')
// })

