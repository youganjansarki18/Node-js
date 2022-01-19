//Working with Aynchronous file system
const fs=require('fs');
fs.writeFile('Aync.txt',"Let's play with Aysynchronous :)",
(err)=>{
    console.log('Completed');
});
fs.appendFile('Aync.txt',"Okay Over and Out...!!!",
(err)=>{
    console.log('Completed');
});
fs.readFile('Aync.txt',"utf-8",(err,data)=>{
    console.log(data);
})
fs.mkdir('CRUD AySyncs',(err)=>{
    console.log('');
});