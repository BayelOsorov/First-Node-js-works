const fs = require('fs')
const { resolve } = require('path')
const path = require('path')
// console.log('Start');
// ! Async file read
// fs.readFile(path.resolve('text.txt'), 'utf-8', (err, data) => {
//     if (err) {
//         console.log(err);
//         return
//     }
//     console.log(data);
// })
// try {
//     const readData = fs.readFileSync(path.resolve('text.txt'), 'utf-8')
//     console.log(readData);
// }
// catch (e) {
//     console.log(e);
// }
// console.log('End');
// (async () => {
//     try {
//         const data = await fs.readFile(path.resolve('text.txt'), 'utf-8')
//         console.log(data);
//     }
//     catch (e) {
//         console.log(e);
//     }
// })()
// fs.writeFile(path.resolve('history.txt'), 'hello is some content', (err) => {
//     if (err) {
//         console.log(err);
//         return
//     }
//     console.log('File was created');
// })
// fs.writeFile(path.resolve('recipes.csv'), 'name price quantity', (err) => {
//     if (err) {
//         console.log(err);
//         return
//     }
//     console.log('File was created');
// })
// fs.appendFile(path.resolve('history.txt'), '\nadded some new content', (err) => {
//     if (err) {
//         console.log(err);
//         return
//     }
//     console.log('File was created');
// })
// fs.unlink(path.resolve('history.txt'), (err) => {
//     if (err) {
//         console.log(err);
//         return
//     }
//     console.log('File was created');
// })
// fs.mkdir(`${process.cwd()}/shared/ui`, { recursive: true }, (err) => {
//     if (err) {
//         console.log(err);
//         return
//     }
//     fs.writeFile(path.resolve('shared', 'ui', 'table.js'), 'let name = "Alice"', (err) => {
//         if (err) {
//             console.log(err);
//             return
//         }
//     });
// })
// fs.writeFile(path)
// fs.writeFile(path.resolve('shared', 'ui', 'table.js'), 'let name = "Alice"', (err) => {
//     if (err) {
//         console.log(err);
//         return
//     }
//     console.log('File was created');
// });
// const writeFileAsync = async (pathString, data) => {
//     return new Promise((resolve, reject) => fs.writeFile(pathString, data, (err) => {
//         if (err) {
//             return reject(err)
//         }
//         resolve(data)
//     }))
// }
// const createMkdir = async (pathString) => {
//     return new Promise((resolve, reject) => fs.mkdir(pathString, { recursive: true }, (err) => {
//         if (err) {
//             return reject(err)
//         }
//         resolve()
//     }))
// }
// createMkdir(path.resolve('header', 'menu')).then(() => writeFileAsync(path.resolve('header', 'menu', 'notes.txt'), 'this is note'))

const writeFileAsync = async (pathString, data) => {
    return new Promise((resole, reject) => fs.writeFile(pathString, data, (err) => {
        if (err) {
            return reject(err)
        }
        resolve(data)
    }))
}
const createDir = async (pathString) => {
    return new Promise((resolve, reject) => fs.mkdir(pathString, { recursive: true }, (err) => {
        if (err) {
            return reject(err)
        }
        resolve()
    }))
}
createDir(path.resolve('tasks')).then(() => writeFileAsync(path.resolve('tasks', 'task1.txt'), '1,2,3,4,5,6,7,8,9,10'))
