
const http = require('http');



const getText = async (path)=>{ //async function 
    if(path=='/')
        return await new Promise((res,rej)=>{  //use await so that it waits for the promise to be resolved
        res("home page");
        })
    else if(path=='/about')
    {
       
        setTimeout(()=>{
            for(let i=0;i<1000;i++){
                for (let j=0;j<1000;j++){
                    console.log(`${i}, ${j}`);
                }
            }
        },0)
        return await new Promise((res,rej)=>{
            res("about page");
            })
    }
    
}

// getText('/').then((data)=>{
//     console.log(data)
// });

const server =http.createServer( (req,res)=>{
     getText(req.url).then((data)=>{
        res.end(data);
    })
    console.log('done');
})

server.listen(5000,()=>{
    console.log("server listening on port 5000...");
})