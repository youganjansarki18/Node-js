//Reading  from a stream
// I have a index.txt file . So, I want to read it in a live fashion
//Create a readable stream
// Handle stream Events->data,end, and error

const fs=require('fs');
const http=require('http');

const server=http.createServer();

server.on('request',(req,res)=>{
    // fs.readFile("index.txt",(err,data)=>{
    //     if(err)console.log("error");
    //     res.end(data.toString());
    // }); //Simple reading and printing

    const rstream=fs.createReadStream('index.txt'); //Creating to read
    // rstream.on('data',(chunkData)=>{ //Reading the data coz it's available
    //     res.write(chunkData);
    // });
    // rstream.on('end',()=>{ //Ending the data 
    //     res.end();
    // });
    // rstream.on('error',()=>{ 
    //     //const rstream=fs.createReadStream('indexs.txt');
    //     res.end("Error");
    // }); 
    rstream.pipe(res);

});

server.listen(8000,"127.0.0.1");