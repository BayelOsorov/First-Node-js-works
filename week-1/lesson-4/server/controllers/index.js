const todosService = require('./../services/todoService')
const { getBodyData } = require('../utils/get-body-data')
const { v4: uuid } = require('uuid')
const getTodos = async (req, res) => {
    try {
        const todos = await todosService.getAll()
        res.statusCode = 200
        res.end(JSON.stringify(todos))
    }
    catch (e) {
        console.log(e);
    }
}
const getOneTodo = async (req, res) => {
    try {
        const id = req.url.split('/')[2]
        const todo = await todosService.getById(id)
        if (!todo) {
            res.statusCode = 404
            res.end(JSON.stringify({ message: 'todo not found' }))
        } else {
            res.statusCode = 200
            res.end(JSON.stringify(todo))
        }
    }
    catch (e) {
        console.log(e);
    }
}
const createTodo = async (req, res) => {
    try {
        const body = await getBodyData(req)
        let { title, description } = JSON.parse(body)
        let newTodo = {
            title,
            description,
            id: uuid()
        }
        res.statusCode = 201
        const createdTodo = await todosService.createOneTodo(newTodo)
        res.end(JSON.stringify({ message: "successfuly created", createdTodo }))
    }
    catch (e) {
        console.log(e);
    }
}
const deleteTodo = async (req, res) => {
    try {
        const id = +(req.url.split('/')[2])
        const todo = await todosService.getById(id)
        if (!todo) {
            res.statusCode = 404
            res.end(JSON.stringify({ message: 'todo not found' }))
        } else {
            await todosService.deleteTodoById(id)
            res.statusCode = 200
            res.end(JSON.stringify({ message: 'todo was deleted' }))
        }
    }
    catch (e) {
        console.log(e);
    }
}
module.exports = {
    getTodos,
    getOneTodo,
    deleteTodo,
    createTodo
}