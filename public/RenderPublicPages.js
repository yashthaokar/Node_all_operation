const http= require('http')
const fs= require('fs')
const hostname = '127.0.0.1'
const port = 3000

const server = http.createServer((req, res) => {
    if(req.url=='/'){
        fs.readFile('./public/Home.html', (err,data)=>{
            if(err) throw err ;
            res.end(data)
        })
        
    }
     else if(req.url=='/about'){
        fs.readFile('./public/About.html', (err,data)=>{
            if(err) throw err ;
            res.end(data)
        })
        
    }
    else { res.end('pls check you are entered wrong url')       
    }
 
})


server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})