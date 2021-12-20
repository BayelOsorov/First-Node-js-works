const http = require('http')
const path = require('path')
const fs = require('fs')
const port = 8000
const data = [
    {
        id: 1,
        name: 'Alex'
    },
    {
        id: 2,
        name: 'Ali'
    },
    {
        id: 14,
        name: 'Sara'
    },
    {
        id: 12,
        name: 'Gr'
    }
]
const server = http.createServer((req, res) => {
    // res.setHeader('Content-Type', 'text/plain')
    // res.statusCode = 201;
    // res.write('This is content from server')
    // res.writeHead(404, {
    //     'Content-Type': 'text/html',
    //     'Authorization': 'token'
    // })
    // res.write('<body><p>Lesson 4</p></body>')
    // res.write('<a href="www.makers.kg">Makers.ks</a>')
    // res.write('<h1>Hello from server</h1>')
    // res.setHeader('Content-Type', 'application/json')
    // res.write(JSON.stringify(req))
    // console.log(req);
    // res.end()
    switch (req.url) {
        case '/':
            if (req.method == 'DELETE') {
                res.write('<h1>DELETE method</h1>')
                res.end()
            } else {
                res.write('<h1>MAin Page</h1>')
                res.end()
            }
            break
        case '/contacts':
            res.write('<h1>Contacts Page</h1>')
            res.end()
            break
        case '/page':
            res.setHeader('Content-Type', 'text/html')
            fs.readFile(path.resolve('index.html'), (err, data) => {
                if (err) {
                    res.write(err)
                    throw err;
                }
                res.write(data)
                res.end()
            })
            break
        default:
            res.statusCode = 404
            res.write('<h1>404 page not found</h1>')
            res.end()
            break;
    }
})
server.listen(port, () => {
    console.log(`server is running on port ${port}`);
})