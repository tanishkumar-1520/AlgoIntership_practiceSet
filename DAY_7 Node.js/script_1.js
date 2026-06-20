console.log("Hello World");

function add(a,b){
 return a+b;
}

console.log(add(4,5));

function sub(a,b){
 return a-b;
}

console.log(sub(4,5));

module.exports = {add,sub};


const path = require("path");
console.log(path.basename(__filename))

const os = require("os");
console.log(os.platform());
console.log(os.cpus.length);

const fs = require("fs");
fs.writeFileSync("myname.txt","Tanish Kumar");

name = fs.readFileSync("myname.txt");
console.log(name.toString());


