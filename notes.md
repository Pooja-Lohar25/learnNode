# Node js notes
Documentation : https://nodejs.org/en/docs/ 
Server side js 
Single threaded
Asynchronous non blocking io model

## npm (node package manager) :
just like pip in python

- while installing through npm, 'node_modules' is automatically installed containing all buitins
- command : npm install <package_name> OR npm i 
- node_modules is heavy so it is not pushed at the time of deployment.. user can have them at their end installed separately
- npm init 
    - with this you initialize your package.. its asks for some details regarding package name, author, version, description, git hub repo etc ect. 
    - this information is then stored in a file called package.json which is again automatically created.
    - this file also contains information about dependencies whenever you install some package.
    - if the dependencies further have some more dependencies then node js creates a complete dependency tree whose details are stored in another file called package-lock.json

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

## os module:
Gives various functions for operating system and its information

## file system
Functions to work with files (file handling)