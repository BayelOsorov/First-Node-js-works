const fs = require('fs')
const path = require('path')
const writeDataFile = (path, data, ch) => {
    fs.writeFile(path, JSON.stringify(data), 'UTF-8', (err) => {
        console.log(path);
        if (err) {
            console.log(err);
            throw err
        }
        if (typeof cb === 'function') ch()
    })

}
module.exports = {
    writeDataFile
}