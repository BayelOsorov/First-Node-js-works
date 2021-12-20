const fs = require('fs')
const path = require('path')
const stream = fs.createReadStream(path.resolve('text.txt'))
// fs.readFile(path.resolve('text.txt'), 'utf-8', (err, data) => {
//     if (err) throw err
//     console.log(data);
// })

// stream.on('data', (data) => {
    //     console.log(data);
    // })

    // stream.on('error && end && open', (error) => {
    //     console.log(error);
// })

