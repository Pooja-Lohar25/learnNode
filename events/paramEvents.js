const eventemitter = require('events')
const emitter = new eventemitter();

emitter.on('study', (sub,status) => {
    console.log(`${sub} is ${status} percent completed`)
})

emitter.on('study',() => {
    console.log("study anything")
})

//on emitting the event all the listeners will be executed and the output will be displayed 
//if insuffiecient values are given it will just show undefined and no error
//if extra values are given still, they would be ignored and no error
emitter.emit('study','nodejs','30')
emitter.emit('study','backend')
emitter.emit('study','backend',30,40)