const fs=require('fs');// Getting File System Modules
// fs.writeFile('Readme.txt','This is CRUD in Ay...',(err)=>{
//    console.log('Files Created');
// });
//If you want to append it, then do after write cpz append works faster than write.
fs.appendFile('Readme.txt',' OKay okay',(err)=>{
   console.log('Completed');
});
fs.readFile('Readme.txt','utf-8',(err,data)=>{
   console.log(data);
});
fs.rename('Readme.txt','Padho.txt',(err)=>{
   console.log('Nothing');
});
fs.unlink('Padho.txt',(err)=>{
   console.log('Bye Bye')
})
//To delete the folder
// fs.rmdir('');