const heyy = require("./sec")
const os = require('os')
const fs = require('fs')
exp = {
    nme: "pooja",
    work : "swe"
}
//console.log(heyy("hii"))
module.exports = exp
//console.log(exports,require,__filename,__dirname)
//os module methods
//console.log(os.freemem()) //returns free memory available
//console.log(os.uptime())
// console.log(os.type())
// console.log(os.networkInterfaces())

//reading files
// fs.readFile('file.txt','utf8',(err,data)=>{   //works asynchronously
//     console.log(data)
// })

//works synchronously
// const a = fs.readFileSync('file.txt','utf8')
// console.log(a)

//writing files (asynchronous)
// fs.writeFile('file.txt',"learning file handling in nodejs",()=>{
//     fs.readFile('file.txt','utf8',(err,data)=>{
//         console.log("file.txt data: ",data)
//     })
    
// })

//synchronous
fs.writeFileSync('file.txt','overwritten in file2')
// console.log("content in file.txt: ")
fs.readFile('file.txt','utf8',(err,data)=>{
    console.log(data)
})

console.log("content of index file")