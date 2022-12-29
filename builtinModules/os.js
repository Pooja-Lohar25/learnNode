const os = require('os');

// console.log(os);
console.log(os.userInfo());
currentos = {
    uptime : os.uptime(),
    type :os.type(),
    release : os.release(),
    totalmemory:os.totalmem(),
    freememory:os.freemem(),

}
console.log(currentos);