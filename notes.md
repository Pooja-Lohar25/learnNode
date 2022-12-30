# Node js notes
Documentation : https://nodejs.org/en/docs/ 
Server side js 
Single threaded
--- Asynchronous non blocking io model

## npm (node package manager) :
just like pip in python

- while installing through npm, 'node_modules' is automatically installed containing all buitins
- command : npm install <package_name> OR npm i <packagename>
- example you can install nodemon that is a package which works same as a live server where we need not to restart the server again and again everytime the file is updated. nodemon package automatically reloads the changes to server. but unlike live server you need to refresh the page.
- node_modules is heavy so it is not pushed at the time of deployment.. user can have them at their end installed separately
- npm init 
    - with this you initialize your package.. its asks for some details regarding package name, author, version, description, git hub repo etc ect. 
    - this information is then stored in a file called package.json which is again automatically created.
    - this file also contains information about dependencies whenever you install some package.
    - if the dependencies further have some more dependencies then node js creates a complete dependency tree whose details are stored in another file called package-lock.json


## Common js module :
importing from another js file. 
Ex : importing an object mm from second.js to mdd.<br>
```node
Const mdd = require("./second"); 
```
Dot specifies same folder <br>
'Second' is the file name 
That has to be exported also.
Syntax (in second.js file):
```node
module.exports = mm; // mm is name of the object in second.js
```
## Module wrapper function:
whenever a module is created nodejs wraps it in  function
function (exports,require, module,__filename,__dirname){
// actual module code
}
## Globals:
Globals are variables which are accesible throughout the application. ex __dirname

## os module:
Gives various functions for operating system and its information

## fs module (file system) : 
Functions to work with files (file handling)

## Common JS Modules vs ES Modules (ECMA Script modules)
- Common js :
    - uses require() to import modules  
    - Syntax :
    ```node
    const someMod = require("./modulename");
    ```
    - it is default for nodejs (also better to use in backend)
    - no need of explicitly specifying the "type" : "module" in package.json as by default common js is considered
- ES module :
    - uses import keyword
    - Syntax : 
    ```node
    import * from "./modulename" ; or import {entity1,entity2,....} from "./modulename";
    ```
    - it is standard for JavaScript and not default for node js
    - "type" : "module" needs to be specified to tell node js to use ES module else it does not recognises the keyword import

## Event Loop in node js
- node js continously run on event driven mechanism
- it works on fifo principle and generates results for the events
- if any event requiring i/o operation or taking too like connections to database this wouldn't stop the execution of further events queued up. Node js will handle this through call backs and will generate the result whenever they are ready. meanwhile it jumps to the next event/ request.

## node js api development
express is used for api development in node js
morgan is a middleware that is used to keep log of requests and it gives information about the type of requests and the time taken. plus it helps in debugging as well.
