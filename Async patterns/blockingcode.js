const http = require('http');
const server  = http.createServer((req,res) =>{
    if(req.url === '/'){
        res.end("home page");
        
    }
    if(req.url === '/about'){
        //blocking code
        for(let i=0;i<1000;i++){
            for (let j=0;j<1000;j++){
                console.log(`${i}, ${j}`);
            }
        }
        res.end("about page");
    }
    console.log("done");
})

server.listen(5000,() => {
    console.log("server is listening on port 5000....");
});


/**
 * Assuming there are two users at a time : one requesting home page other requesting about page.
 * there's a blocking code on about page.
 * when this blocking code is invoked it will hamper user 1 as well
 * If the request for home page is made in between the running of the loop..the home page wont load untill the loop is over.
 * About and home page both continue buffering. 
 */