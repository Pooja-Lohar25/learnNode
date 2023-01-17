const fs = require('fs');
console.log(fs);
fs.mkdir("pooja",{recursive: true},(err) => {
    if(err) throw err;
});


//reading files
fs.readFile('file.txt','utf8',(err,data)=>{   //works asynchronously
    console.log(data)
})

//works synchronously
const a = fs.readFileSync('file.txt','utf8')
console.log(a)

//writing files (asynchronous)
fs.writeFile('file.txt',"learning file handling in nodejs",()=>{
    fs.readFile('file.txt','utf8',(err,data)=>{
        console.log("file.txt data: ",data)
    })
    
})

//synchronous
fs.writeFileSync('file.txt','overwritten in file2')
// console.log("content in file.txt: ")
fs.readFile('file.txt','utf8',(err,data)=>{
    console.log(data)
})
