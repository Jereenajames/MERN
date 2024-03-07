console.log(module);
const module1 = require("./module1.js");
// console.log(__dirname);
// console.log(__filename);
let moduleobj = require("./module1.js")

// console.log(module1);
console.log(moduleobj.userDetails);
console.log(moduleobj.subjects);
moduleobj.dispalayUserName("John");
