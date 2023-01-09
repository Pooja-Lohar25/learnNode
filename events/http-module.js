//creating http server and using events
const http = require('http');
const server = http.createServer();
server.listen(5000)
server.on('request',(req,res)=>{
    res.end('home page')
})