const fs=require("fs");// To use somne modules

//-->Creating a new file. If not present, then a file is created first and then everything is added
// fs.writeFileSync('read.txt',"Hi... I am Youganjan Sarki");

//-->If the file is present and we overwrite it, then the entire previous data is removed and the data is added;
fs.writeFileSync('read.txt','Hello I am Youganjan');

//If we need to append something in a file
fs.appendFileSync('read.txt'," I am Fine How are you???");

//Inorder to read a file
const buf_data=fs.readFileSync('read.txt');
// console.log(buf_data);
//Node.js includes an additional data type called buffer
//(not availbale in browser)
//Buffer is mainly used to store binary data
//while reading from a file or recieving packets over the network

/* <Buffer 48 65 6c 6c 6f 20 49 20 61 6d 20 59 6f 75 67 61 6e 6a 61 6e 20 49 20 61 6d 20 46 69 6e 65 20 48 6f 77 20 61 72 65 20 79 6f 75 3f 3f 3f> */
const org_data= buf_data.toString(); //Binary is converted to the string
console.log(org_data);

//To rename a file
fs.renameSync('read.txt','renamed.txt');