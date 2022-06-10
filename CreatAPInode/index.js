// const http= require('http')
// const fs= require('fs')


// const server= http.createServer((req,res)=>{
//    const data =  fs.readFileSync('./CreatApinode/userapi.json',"utf-8")
//     const objData= JSON.parse(data)

    


//     if (req.url== '/'){
//         res.end("this is home page")
//     }
//     else if(req.url=='/userapi'){ 
//          res.writeHead(200, {"content-type":"application/json"})
//         res.end(objData[1].name)
//         // fs.readFile('./CreatApinode/userapi.json',"utf-8",(err, data)=>{
          
//         //     console.log(data)
//         //     res.end(data)// we are getting data.
//         // })
//        // we are creating sync call now beacus we want only one time load api

//     }
//     else{
//         res.end('you enter wrong url pls chechk')
//     }
// })

// server.listen(8000,()=>{
//   console.log("our server is running at port 8000")
// })