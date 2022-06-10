// in this file we see how to cannect with mongodb.

const { MongoClient } = require("mongodb"); // its preffered way
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);
const database = "e-comers";

async function dbConnect() {
  let result = await client.connect();
  let db = result.db(database); // we connenct with ecomers data base.
  return db.collection("products");
}
module.exports= dbConnect;