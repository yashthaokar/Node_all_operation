// const dbConnect = require("./Mongodb/mongodb");

// const insert = async () => {
//   const db = await dbConnect();
//   const result = await db.insert(
//     //{ Username: "yash", Category: "outside" } //---------we send single data.
//     [
//       { Username: "yash", Category: "gym" },
//       { Username: "aman", Category: "gym" },
//       { Username: "raj", Category: "gym" },
//     ] //----------------------------------- like this we can send multiple data.
//   );
//   if (result.acknowledged) {
//     console.log("data inserted");
//   }
// };
// insert();