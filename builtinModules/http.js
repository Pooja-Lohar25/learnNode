// const http = require("http");

// const server = http.createServer((req,res)=>{
//     res.end("server created");
// });

// server.listen(3306);


// creating server with express js

const express = require("express");
const morgan = require("morgan");
const app = express();

//creating user defined middleware
const mymiddle = ()=>{
    console.log("middleware applied");
};

//middleware
app.use(morgan("dev")); //dev is a preset. other presets are also there like 'tiny' ..//they just give info about the request

app.use(mymiddle);

app.get("/",(req,res)=>{ //"/" this url is accessed as localhost: port
    res.send("yeahh!!...you got the req handled");
}); // first arg is the url second is the call back which will be exceuted on get request



const port = 3306;
app.listen(port,()=>{
    console.log(`server listening on port: ${port}`); 
}); //a call back can be added which is executed just when the server starts listening 

//running this file in cli server gets started and then a http request through browser has to be sent to see the output on the browser window