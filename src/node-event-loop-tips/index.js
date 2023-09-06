const process = require('process');
const fs = require('fs');

const cb1 = () => console.log('cb1 from setTimeout');
const cb2 = () => console.log('cb2 from Promise');
const cb3 = () => console.log('cb3 from nextTick');
const cb4 = () => console.log('cb4 from readFile');
const cb5 = () => console.log('cb5 from setImmediate');

setTimeout(cb1, 0);

Promise.resolve().then(cb2);

process.nextTick(cb3);

fs.readFile('./', cb4);

setImmediate(cb5);

/*
1) nextTick
2) Promise
3) setTimeout
4) setImmediate
5) readFile
*/