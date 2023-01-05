const EventEmitter = require('events')
const myEmitter = new EventEmitter();


//on() -- params : (eventname,callback) 
//adds the callback to the event
//event listener 1
myEmitter.on( 'bigEvent' ,() => { // name of event : bigEvent
console.log("bigEvent emitted")
})

/**
 * myEmitter.emit('bigEvent') 
 * Once the event is emitted, any listener defined after that won't be executed.
 * i.e on executing line 17, event listener 2 won't be able to listen to the event   
 */
//event listener 2
myEmitter.on( 'bigEvent' ,() => { // name of event : bigEvent
    console.log("bigEvent emitted again")
})
//emit() -- params : (eventname)
//triggers the event specified
myEmitter.emit('bigEvent') //callback will be executed when this event is triggered