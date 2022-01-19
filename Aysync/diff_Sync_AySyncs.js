//Sync v/s AySyncs
const fs=require('fs');
//Synchronous
const data=fs.readFileSync('Aync.txt','utf-8');
console.log(data);
console.log('Hi Hi Hi');

console.log('');
console.log('');
console.log('Now, AySYNCHRONOUS');
fs.readFile('Aync.txt','utf-8',(err,data)=>{
    console.log(data);
});
console.log('Hi Hi Hi');
//AySyncs Does't wait for anyone