const name = require('./name');
const {readFileSync, writeFileSync} = require('fs');
const first = readFileSync('./content/first.txt','utf-8');
const result = writeFileSync('./content/third.txt', `${new Date().toJSON()}custom data`);
const amount = 12;
console.log(result);
const sayName = (name)=>{
    console.log(name);
};

sayName(name['name']);
