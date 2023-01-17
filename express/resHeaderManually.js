const http = require('http')

const server = http.createServer((req,res)=>{
    //writing response header
    res.writeHead(200,{'content-type':'text/html'})
    res.write("<h1>h1 heading</h1>")
    res.end()
})

server.listen(5000)