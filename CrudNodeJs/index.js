// const fs= require('fs')


//fs.mkdirSync("yashthaokar") // to creat folder by using this.

// fs.writeFileSync("yashthaokar/crud.txt","this is data to send crud file by using this method");
// // we creat new file under folder and send data to it

// fs.appendFileSync("yashthaokar/crud.txt", " -- we added new data by using append method innode js")
// data is adding without overwrite old data.

// const data= fs.readFileSync("yashthaokar/crud.txt");
// console.log(data);// so we get buffer data buffer data mins binnary data we dont want that data so we add to string or some methods to convert that buffer data into string data.

// const data= fs.readFileSync("yashthaokar/crud.txt","utf8");// we use utf8 to change data buffer to string .
// console.log(data);

// fs.renameSync("yashthaokar/crud.txt","yashthaokar/created.txt")
// // we use this to rename the text.file.

// fs.unlinkSync("yashthaokar/created.txt")
// // just give the path of file and file will delet from that folder

// fs.rmdirSync('folderName');
// will delet the present folder .