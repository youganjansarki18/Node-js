const path=require('path');
console.log(path.dirname('C:\Users\LENOVO\OneDrive\Desktop\Node js\path_modules.js'));
console.log(path.extname('C:\Users\LENOVO\OneDrive\Desktop\Node js\path_modules.js'));
console.log(path.basename('C:\Users\LENOVO\OneDrive\Desktop\Node js\path_modules.js'));
console.log(path.parse('C:\Users\LENOVO\OneDrive\Desktop\Node js\path_modules.js'));
const myPath=path.parse('C:\Users\LENOVO\OneDrive\Desktop\Node js\path_modules.js');
console.log(myPath.name);