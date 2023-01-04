//promisify method takes an argument which is a callback based function and returns a promise based function
//package required : util
//promisify makes it easier when dealing with lot of callbacks
const fs = require('fs')
const util = require('util')
const readFilePromise= util.promisify(fs.readFile)
const writeFilePromise = util.promisify(fs.writeFile)

const start = async ()=>{
    const first = await readFilePromise('./file.txt','utf-8')
    const second = await readFilePromise('./sec.txt','utf-8')

    await writeFilePromise('./file.txt', `The new text is ${first} , ${second}`)

    console.log("done reading writing");
}

start();