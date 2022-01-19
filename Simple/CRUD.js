// CRUD=Create, Read, Update, Delete
const fs=require('fs');
// fs.mkdirSync('Sarki'); // Create a file
fs.writeFileSync('read.txt',"CRUD Challenge"); 
fs.appendFileSync('read.txt'," Let's complete it"); //update
// const text= fs.readFileSync('read.txt').toString();
const text= fs.readFileSync('read.txt','utf8')
console.log(text);
fs.renameSync('read.txt','mybio.txt'); //Read
// fs.unlinkSync('mybio.txt',function(err){  //Delete
//     if(err) 
//        throw err;
//     console.log("Successfully deleted!");
// })

