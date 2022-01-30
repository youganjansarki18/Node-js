//  api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
// 66b836a7e9df795adce7059b23165140 
//  api.openweathermap.org/data/2.5/weather?q=Delhi&appid=66b836a7e9df795adce7059b23165140
//-----------X----------------------------------X----------------
//PLaying with Node.js
const http= require('http');
const fs= require('fs');
var requests = require('requests');
//We need to make it live. Get the real set of Data
const homeFile= fs.readFileSync('home.html','utf-8');
let url="http://api.openweathermap.org/data/2.5/weather?q=Delhi&appid=35205331ebef1a1ea206ac5ce7d8a9cf";

const replaceVal=(tempVal,orgVal)=>{
  let temperature = tempVal.replace("{%tempval%}", orgVal.main.temp);
  temperature = temperature.replace("{%tempmin%}", orgVal.main.temp_min);
  temperature = temperature.replace("{%tempmax%}", orgVal.main.temp_max);
  temperature = temperature.replace("{%location%}", orgVal.name);
  temperature = temperature.replace("{%country%}", orgVal.sys.country);
  temperature = temperature.replace("{%tempstatus%}", orgVal.weather[0].main);

  return temperature;
};
const server= http.createServer((req,res)=>{
     if(req.url="/"){
        requests(url)
        .on('data', function (chunk) {
          const objdata = JSON.parse(chunk);
          const arrData = [objdata];
        //console.log(arrData);
          const realTimeData = arrData.map((val) => replaceVal(homeFile, val))
          .join("");
        res.write(realTimeData);
        //console.log(realTimeData);
        })
        .on('end', function (err) {
          if (err) return console.log('connection closed due to errors', err);
          console.log('end');
          res.end();
        });
     }
});
server.listen(8000,"127.0.0.1");
