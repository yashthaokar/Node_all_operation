const express= require('express')
const  dbConnect= require('./Mongodb/mongodb')
const app = express()

app.use(express.json())// it is the middleware.

app.get("/",async (req,res)=>{
  let data= await dbConnect()
  data= await data.find(). toArray()
  console.log(data)
  res.send(data)
})
////------------post methods-----------
// app.post('/',async (req,res)=>{
//   console.log(req.body)
//   let data=await dbConnect()
//   let result = await data.insert(req.body)// the data send by post man is pass here.
//        res.send(result)
// })
//-------------put data--------------
// app.put('/',async (req,res)=>{
//   console.log(req.body)
//   let data= await dbConnect()
//   let result= data.updateOne(
//     {name:'ambani'},
//     {$set:req.body}
//     )
//   res.send(req.body)
//     //res.send({result:"updated"})
// })
////-------------query params
// app.put('/:name',async (req,res)=>{
//   console.log(req.body)
//   let data= await dbConnect()
//   let result= data.updateOne(
//     {name:req.params.name},
//     {$set:req.body}
//     )
//   res.send(req.body)// in this we use parameters to find the data and update. we can pass anything by which we can grab data. we use name here.
//     //res.send({result:"updated"})
// })
////---------------delet methods-------

app.delete('/:id',(req,res)=>{
  console.log(req.params.id)
  let data= await dbConnect()
  let result= data.deleteOne({})
  res.send('done')

})

 


 console.log('data is send on browser')
app.listen(5000)