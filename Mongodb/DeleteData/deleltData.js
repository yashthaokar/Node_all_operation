const dbConnect= require('./Mongodb/mongodb')

const deletData=async()=>{
  let data=await dbConnect()
  // let reuslt=await data.deleteOne(
  //   { Username:"yash"}
  // )// deletone take one param that was to grab the data to delete.and deletone delete only one data which present first in db.
  let reuslt=await data.deleteMany(
    { Username:"yash"}
  )// dlelt many will delet all db which content or match with the param inside db.

  console.log(reuslt)
}
deletData()