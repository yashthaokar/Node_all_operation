// // Read Data form MongoDb, read data, make file for bd connection, handle promise

// const dbConnect= require('./Mongodb/mongodb')


// //------------1st way to connect---------
// // dbConnect().then((res)=>{
// //       console.log(res.find().toArray().then((data)=>{
// //     console.log(data)
// //       }))
// // })

// // console.log(dbConnect())

// //-----------------2nd way to connect---------
// const main=async()=>{
//  let data= await dbConnect()
//  data=await data.find().toArray()
//  console.log(data)
// } // prefere way  esay to write and read.
// main()