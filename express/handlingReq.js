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
    /**
     * all the resources be it img, css file, or js need to be specified separately.
     * 
     * before this they must also be read by readFileSync() method and contents to be stored in a variable
     * 
     * while reading a webpage when a path of for ex image is read the server calls the url as 'localhost/logoimg.svg'
     * 
     * if the server won't find this url in any of the if statements it won't display the image. same goes with other resources as well
     * 
     * else if(url==='/logoimg'){
     * res.writeHead(200,{'content-type':'img/svg'})
        res.write(homeimage) 
        res.end()
     * }
     * else if(url==='/styles'){
     * res.writeHead(200,{'content-type':'text/css'})
        res.write(homestyle) 
        res.end()
     * }
        else if(url==='/logic'){
            res.writeHead(200,{'content-type':'text/javascript'})
            res.write(homelogic) 
            res.end()
     * } 
            
     */
    else{
        res.writeHead(404,{'content-type':'text/html'})
        res.write("<h1>Sorry resource not found</h1>")
        res.end()       
    }
    
})

server.listen(5000)