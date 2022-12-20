const heyy = require("./sec")
const os = require('os')
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
console.log(os.type())