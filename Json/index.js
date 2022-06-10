// const bioData= {
//     name:'vinod',
//     age:'24',
//     city:'pune'
// }// we created a object
// console.log(bioData);

// const jsonData= JSON.stringify(bioData);
// console.log(jsonData);
// // we converted object into josn data by usinng josn.stringify

// const objectData= JSON.parse(jsonData)
// console.log(objectData);
// // we again converted josn data into object.

const fs= require('fs')

// const bioData= {
//     name:'vinod',
//     age:'24',
//     city:'pune'
// }
// console.log(bioData);

// --------convert to josn, add this data into other file, read data form that file. again convert back to js object and console.log that data.---------

// const jsonData = JSON.stringify(bioData)
// fs.writeFile('newFile.josn',jsonData,(err)=>{
//   console.log('file is created and data is added');
// })// we send data to that file.

fs.readFile('newFile.josn', 'utf-8', (err,data)=>{
    console.log(data);// we read data fom that file.
    const convert= JSON.parse(data);// we again converted josn data inot object
console.log(convert)
})  
