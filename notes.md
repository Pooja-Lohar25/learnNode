# Node js notes 
Server side js 
Single threaded
Asynchronous non blocking io model

## Common js module :
importing from another js file. 
Ex : importing an object mm from second.js to mdd.
Syntax 
Const mdd = require("./second"); 
Dot specifies same folder
'Second' is the file name 
The has to be exported also.
Syntax (in second.js file) 
module.exports = mm; // mm is name of the object in second.js

## module wrapper function:
whenever a module is created nodejs wraps it in  function
function (exports,require, module,__filename,__dirname){
// actual module code
}
