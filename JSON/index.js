const Biodata={
    name:"Youganjan Sarki",
    age:"20",
    address:"Lakhipara T.G",
};
// console.log(Biodata.name);

// const objData= JSON.parse(JSONdata); // String to Object
// console.log(objData); //{ name: 'Youganjan Sarki', age: '20', address: 'Lakhipara T.G' }

//Now playing with JSON Files
// 1. Convert to JSON'
const JSONdata = JSON.stringify(Biodata);//Convert object to String
// console.log(JSONdata); //{"name":"Youganjan Sarki","age":"20","address":"Lakhipara T.G"}
//console.log(JSONdata.name);//Undefined. 

//2. Add this data to dusra file
const fs=require('fs');
fs.writeFile('JSON.txt',JSONdata,(err)=>{
    console.log("Done");
});

//3.Read file
fs.readFile("JSON.txt",'utf-8',(err,data)=>{
    console.log(data);
    const orgData=JSON.parse(data);
    console.log(orgData);
});

