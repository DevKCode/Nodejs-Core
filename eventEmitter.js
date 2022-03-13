const http = require('http');
const EventEmitter = require('events');

const server = http.createServer((req,res)=>{
res.write('server works');
});
server.listen(8000);



server.on('response', (req,res)=>{
    res.write('data received');
})

const eventEmitter = new EventEmitter();
eventEmitter.emit('response');