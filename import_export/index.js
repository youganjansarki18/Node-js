// const add=require('./open'); 
//module.exports helps add function to be public and accessible.
//require now gets it and "./" k through say we can get it
//now store it in a  varible and use it
// console.log(add(5,5));

//To access all the function. Now it is a objects and inside it are diff. 
//methods which can be used
const open=require('./open');
console.log(open);
//Now we need to access the methods inside it
console.log(open.add(5,3));
console.log(open.sub(10,5));

const {add,sub,name,mul}=require('./open_01')// Object Destructring
console.log(add(5,5));//Nowm we don't need to write open.add ..
console.log(sub(3,5));
console.log(mul(3,5));
console.log(name);
//The order doesn't matter unlke react see "name";