const http = require('http')
const fs = require('fs')

//reading file to send its content as response
const homepage = fs.readFileSync('./express/index.html',(err)=>{
    if(err) console.log(err)
})

const server = http.createServer((req,res)=>{
    //request handling acc to url
    const url = req.url
    if(url==='/'){
        res.writeHead(200,{'content-type':'text/html'})
        res.write(homepage)
        res.end()
    }
    else if(url==='/about'){
        res.writeHead(200,{'content-type':'text/html'})
        res.write("<h1>About Page</h1>")
        res.end()
    }
    else if(url==='/contact/sam'){
        res.writeHead(200,{'content-type':'text/html'})
        res.write("<h1>yeah! Sam is here</h1>")
        res.end()
    }
    else{
        res.writeHead(404,{'content-type':'text/html'})
        res.write("<h1>Sorry resource not found</h1>")
        res.end()       
    }
    
})

server.listen(5000)