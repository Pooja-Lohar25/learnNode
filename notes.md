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
<b>express</b> is used for api development in node js <br>
morgan is a middleware that is used to keep log of requests and it gives information about the type of requests and the time taken. plus it helps in debugging as well.

## Nodemon 
Nodemon is npm package which constantly keeps track of any changes on the server and reloads them without us manually restarting it. <br>

### Setting up nodemon
- Install nodemon
    ```node
    node install nodemon
    ```
- set the "start" and "dev" property of "scripts" in package.json created at the time of node init
    ```node
    "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start" : "node app.js", 
    "dev" : "nodemon app.js" //keep in mind the correct filelocation
    }
    ```
- On starting the server <br>
    npm run command_name <br>
    ```node
    npm run dev 
    ```

Now the server will continue to run also reloads in case of any updates on the server. <br>
app.js is the file that is loaded everytime.

## Promises, Async and Await
Promise is a kind of event that will either be resolved or rejected. It is a cleaner way of writing asynchrous style of functions.<br>
Just like try and catch, promises use .then() and .catch() methods.<br>
- .then() : defines what to do if the promise is resolved. We can have chain of .then() methods.<br>
        whatever is returned by one then() method it will be passed on to the next one.
- .catch() : defines what to do if the promise is rejected. <br>
    
<b>async</b> keyword is used in function definitions where the function is an asynchronous type of function.<br> 
<b>await</b> keyword is used inside the async function which tells that the code will take some time and so it must wait for the results. <br>
await cannot be used without async<br>
async/await are used for writing asynchronous codes that feel like synchronous. 

## Events
Events are actions on a computer. reading writing to file or connection etc. We can also create our own events.<br>
<b>Package : events </b><br>
To use the package we need to create an object. 
syntax: 
```node
const EventEmitter = require('events')
```
<b>EventEmitter : </b> A class whose object will be used for event handling.<br> <br>
EventEmitter is not a keyword <br>
Syntax :
```node
const customeEmitter = new EventEmitter()
```

### Methods :
- emit() : triggers the event
- on() : adds a callback to the event when it is triggered.
        we can add as many callbacks we want to add to the event and all the listeners/callbacks would be excuted when event is trigerred. <br>
        All the callbacks are added with on() methods separately. <br>
        Syntax : <br>
    ```node 
        customEmitter.on('event1',()=>{  //callback1  })
        customEmitter.on('event1',()=>{  //callback2  })
    ```
- once() : callback (listener) will be added only once when event is triggered... and time when event is triggered   again the listener is ignored

## Express
- Node js framework for api development. <br>
- Makes resource fetching easier.<br>
- while rendering a web page all the links that are mentioned into the webpage (css/js/imgs..etc) need to be handled in if statements separately just like '/about' , '/contacts' are managed. (refer handlingReq.js file) <br> <br>

Since we are not rendering the webpages or calling them rather the server is reading them and any link encountered in the webpage will be called by the server. The server then checks the link if it is handled in callback or not if not it mentions as resource not found. <br>

* all the resources be it img, css file, or js need to be specified separately.

* before this they must also be read by readFileSync() method and contents to be stored in a variable

* while reading a webpage when a path of, for ex an image, is read, the server calls the url as 'localhost/logoimg.svg'
 
* if the server won't find this url in any of the 'if' statements it won't display the image. Same goes with other resources as well.
* <b> Express  makes all of this easier. </b>

### Sending files using express
All the static files like html,css, js, and imgs (all frontend files) should be stored in a separate folder say 'public' (name can be of your choice) <br>

```node
app.use(express.static(path.resolve(__dirname,'public')))
/* app -> server instance 
use() -> method which calls the middleware
middleware is something which runs when the user  requests some resource and before giving the response the middleware would be invoked
express.static is the middleware that is called
it takes path of the static folder where all the files, img etc are stored
*/
```

To render the index page of website it must contain a file named as index which will be automatically called when the middleware goes to 'public' folder

### Middlewares in express
Middlewares are kind of functionalities that run before the get or post request is made  to the server. <br>
There can be builtin middlewares or userdefined. Express is almost a bunch of numerous middlewares.<br>
Express allows middlewares to access both request and response objects without needing the developer to pass them explicitly to the middleware. 

After express calls the middleware it also has to be passed with the next middleware with should be called after completion of the current one. <br>

For this it uses 
```node
next() 
```
<p>creating user defined middleware : logger</p>
                                               
```node
logger = (req,res,next) => {
    const url = req.url
    const method = req.method
    const time = new Date().getTime() 
    console.log(url,method,time)   
    next()
}
```
<p>use this logger for a specific route</p>
    
```node
app.get('/item',logger,(req,res)=>{ //logger is not called but referenced
    res.send("items")
})
```
    
<p> using logger with all the requests </p>
    
```node
app.use(logger)
```
<p>using multiple middlewares</p>
    
```node
app.use([middleware1,middleware2,....so on]) //middlewares will be called in sequence
```
