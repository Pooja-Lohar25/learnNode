/**
 * reading and writing files using readFile() and writeFile() can inefficient for large size files 
 * so we use streams 
 */

const {createReadStream} = require('fs')
const stream = createReadStream('./big.txt')
stream.on('data',(result) =>{
    console.log(result);
})

//creating a big file
// const fs = require('fs')
// for(let i=0 ;i<10000;i++){
//     fs.writeFileSync('./big.txt',`hello world ${i}\n`,{flag:'a'})
// }

//reading the data
stream.on('data',(result) =>{
    console.log(result);
})

//reading the error
stream.on('error',(err) =>{
    console.log(err);
})

const fs = require('fs')
const http = require('http')


/**
 * using readStreams you can send data in chunks over the network which is more efficient 
 * and faster way of sending data from server 
 */

const server = http.createServer((req,res)=>{
    const text = fs.createReadStream('./big.txt',{encoding:'utf8'})
    text.on('open',()=>{
        text.pipe(res)

    })
    text.on('error',(err)=>{
        res.end(err)
    })
});


server.listen(5000)
