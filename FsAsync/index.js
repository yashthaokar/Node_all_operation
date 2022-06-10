// const fs= require("fs")

// fs.writeFile("read.txt","add this thing in read text file",
// (err)=>{
//   console.log("complited");
//   console.log(err);
// })// by this we can creat Asynchronous file ,(our call back argument is error)
// we pass them a function as ana argument a call back- that gets called when that task completes. the call back has an argument that tells you whether  the operation completed successfully. now we need to day what to do when fs.writeFile has completed even if its nothing and start checking for errors.

// fs.appendFile("read.txt","this is new data added here ok",
// (err)=>{
//   console.log("complited");
//   console.log(err);
// })// added data to that file Async

// fs.readFile("read.txt","utf-8",
// (err,data)=>{
//   console.log(data);
 
// })// we can read the contect of the file just we have to provide 2 arguments.
