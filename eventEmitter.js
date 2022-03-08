const http = require('http');
const EventEmitter = require('events');




server.on('response', (req,res)=>{
    res.write('data received');
})

const eventEmitter = new EventEmitter();
eventEmitter.emit('response');