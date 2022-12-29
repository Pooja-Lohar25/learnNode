const path = require('path');

console.log(path.sep); // platform specific path separator
const filePath = path.join('/content','subfolder','test.txt');
console.log(filePath);
//output : /content/subfolder/test.txt

console.log(path.basename(filePath)); //gives the last part of the path
//output : test.txt

console.log(path.resolve(__dirname,'/content','test.txt')); 
//if given filename output is its absolute path

// if given string arguments it works same as path.join()

