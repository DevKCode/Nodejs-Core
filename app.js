const http = require('http');
const EventEmitter = require('events');


const server = http.createServer((req,res)=>{
    console.log(req.url);
    console.log('started server');
    res.write(req.url);
res.write('Node appddd');
res.end();
})

server.listen(8000);

server.on('response', (req,res)=>{
    res.write('data received');
})

const eventEmitter = new EventEmitter();
eventEmitter.emit('response');