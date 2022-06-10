const dbConnect = require('./Mongodb/mongodb')

const updateData=async()=>{
  let data=await dbConnect()
  // let result=await data.updateOne(
  //   {Category:"gym"},
  //   {
  //   $set:{Category:"sports"}         
  // }// updateOne takes 2 argument first to grab and second to change. it will modifiled only one who is first in that db.
  let result=await data.update(
      {Category:"gym"},
      {
      $set:{Category:"sports"}         
    } // if we give update() methods so it will updata all data with that content.
    )
  console.log(result)
}
updateData()
