const Emitter = require('events')
const { emit, connected } = require('process')
const emitter = new Emitter()
const fs = require('fs')
// const cb = (data, arg1, arg2, arg3) => {
//     console.log(`We have received message ${data} ${arg1} ${arg2} ${arg3}`);
// }
// emitter.on('requestMessage', cb)
// emitter.emit('requestMessage', 'hello i am from America', '43343', '4343', '3434')
// emitter.on('message', (msg) => {
//     process.exit()
// })
// process.on('beforeExit', (code) => {
//     process.exit()
// })
// for (let i = 0; i <= 100; i++) {
//     console.log(i);
//     if (i === 55) {
//         emitter.emit('message')
//     }
// }
// fs.readFile('./text.txt', (err, data) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(data.toString());
// })