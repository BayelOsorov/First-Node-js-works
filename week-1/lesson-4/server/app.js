require('dotenv').config()
const todosController = require('./controllers/index')
const http = require('http')
const PORT = process.env.PORT || 5000
const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json')
    if (req.url === '/todos' && req.method === 'GET') {
        todosController.getTodos(req, res)
    }
    else if (req.url.match(/\/todos\/\w+/) && req.method === 'GET') {
        todosController.getOneTodo(req, res)
    }
    else if (req.url.match(/\/todos\/\w+/) && req.method === 'DELETE') {
        todosController.deleteTodo(req, res)
    }
    else if (req.url === '/todos/create' && req.method === 'POST') {
        todosController.createTodo(req, res)
    }
})
server.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
})