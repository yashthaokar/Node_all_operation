// // we just start with monoose.
// // connect node js with mongodb and mongoose.
// const mongoose= require('mongoose')
// const main =async()=>{
//   await mongoose.connect("mongodb://localhost:27017/e-comers");
//   const ProductSchma= new mongoose.Schema(
//     {
//       name:String
//     })
//     const ProductModel= mongoose.model("products",ProductSchma)
//      let data= new ProductModel({name:'m20'})
//      let result= await data.save()
//      console.log(result)

// }
// main()
// // all fileds are consider or difined inside schema to defince datatypa and validate them
// //model is use that schema and connect mongodb. modle take to arguments first is  bd callection name, our schma name.

// //--------------------------all operation ----------------
// // we just start with monoose.
// // connect node js with mongodb and mongoose.
// const mongoose= require('mongoose')
// const saveInDB =async()=>{
//   await mongoose.connect("mongodb://localhost:27017/e-comers");
//   const ProductSchma= new mongoose.Schema(
//     {
//       name:String
//     })
//     const ProductModel= mongoose.model("products",ProductSchma)
//      let data= new ProductModel({name:'m20'})
//      let result= await data.save()
//      console.log(result)

// }
// //saveInDB()

// const updateInDB= async()=>{
//   const Product= mongoose.model("products",ProductSchma);
//   let data= await Product.updateOne(
//     {name:'iphone 13pro max'},
//     { $set:{price:7000}
//   }   
//   )
//    console.log(data)
// }
// // updateInDB()

// const deletInDB=async()=>{
//   const Product= mongoose.model('products',ProductSchma)
//   let data = await Product.deleteOne({name:'iphone 13pro max'})
//   console.log(data)
// }
// //deletInDB()

// const findInDB=async()=>{
//   const Product= mongoose.model('products',ProductSchma)
//   let data = await Product.find()
//   console.log(data)
// }// find() is use to find data form Db and if we want specific data so pass that value in find() indise .
// //findInDB()
// if i find that value which is not present in db so we got [] empty .