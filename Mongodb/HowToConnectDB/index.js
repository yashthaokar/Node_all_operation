// in this file we see how to cannect with mongodb


const {MongoClient}= require("mongodb")// its preffered way 
// const MongoClient= require("mongodb").MongoClient // its old way to write 

const url= 'mongodb://localhost:27017'
const client = new MongoClient(url)
const database= 'e-comers'

async function getData(){
    let result= await client.connect()
   let db= result.db(database) // we connenct with ecomers data base.
   let collection= db.collection('products')
   let data= await collection.find({}).toArray()
  console.log(data)// we can see data in console or terminal
}
getData()