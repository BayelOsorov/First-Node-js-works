console.log('start');
setImmediate(() => {
    console.log('first setImmediate ');
})
setTimeout(() => {
    console.log('first timeout ');
}, 38)
setTimeout(() => {
    console.log('second timeout ');
}, 0)

process.nextTick(() => console.log('next tick'))
console.log('end');