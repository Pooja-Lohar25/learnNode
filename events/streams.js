/**
 * reading and writing files using readFile() and writeFile() can inefficient for large size files 
 * so we use streams 
 */

const {createReadStream} = require('fs')
const stream = createReadStream('./big.txt')
stream.on('data',(result) =>{
    console.log(result);
})