//following code will be initiated on the start of the script automatically
//refer to start attribute of scripts in package.json
//console.log("welcome to new landing page")

//creating a big file
// const fs = require('fs')
// for(let i=0 ;i<10000;i++){
//     fs.writeFileSync('./big.txt',`hello world ${i}\n`,{flag:'a'})
// }

const {createReadStream} = require('fs')
const stream = createReadStream('./big.txt',{encoding:'utf8'})

//reading the data
stream.on('data',(result) =>{
    console.log(result);
})

//reading the error
stream.on('error',(err) =>{
    console.log(err);
})

