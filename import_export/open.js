const add=(a,b)=>{
    return a+b;
};

const sub=(a,b)=>{
    return a-b;
};

const name="Youganjan Sarki"
module.exports.add=add; // It helps to make these fun/var accessible 
//What to do if we want to exports multiple function???
module.exports.sub=sub;

//Now, if multiple functions are created . What to do now???
//Use object Destructuring
