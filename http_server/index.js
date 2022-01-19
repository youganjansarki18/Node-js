const http= require('http');
const fs=require('fs');
const server=http.createServer((req,res)=>{
     fs.readFileSync(`${__dirname}/NODEJS/http_server/API/userAPI.json`,'utf-8');
     //ONly using it once. Easy to use doen't gets load again and again 
    if(req.url == "/about"){
        res.end("Hi From other about side");
    }
    else if(req.url==="/contact"){
        res.end("Hello from Contact");
    }
    else if(req.url == "/userAPI"){
        // fs.readFile(`${__dirname}/NODEJS/http_server/API/userAPI.json`,'utf-8',(err,data)=>{
        //   console.log(data);
        //   const objdata=JSON.parse(data);
        //   console.log(objdata[2]);  
        // });
        res.end('Hi From other side');
    }
    else{
        res.writeHead(404,{"Content-type":"text/html"});
        res.end("<h1>404 Error page.</h1>")
    }
});

server.listen(8000,"127.0.0.1",()=>{
    console.log('Listening to the port no. 8000');
});
// server.setTimeout(1000,()=>{
//     console.log("Error 404");
// })