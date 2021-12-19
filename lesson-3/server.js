const http = require('http')

const server = http.createServer((request, response) => {
    response.write('<h1>Hello World</h1>')
    response.end()
})
server.listen(5000, () => {
    console.log('server is running on port 5000');
})
