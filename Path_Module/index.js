const path = require("path");
// console.log(path.basename("f:/NODEJS-Modules/Wrapper_Module/index.js"));
// console.log(path.basename(__filename));

// console.log(path.dirname("f:/NODEJS-Modules/Wrapper_Module/index.js"));
// console.log(path.dirname(__filename));
// console.log(path.extname(__filename));
console.log(path.join('/search',"home","about/contact","info","view"));
console.log(path.join('/search',"home","about/contact","info","view",".."));
console.log(path.join(__dirname,"home","about/contact","info","view",".."));
