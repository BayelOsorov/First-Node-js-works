let todos = require('./../models/todosModel')
const fs = require('fs')
const path = require('path')
const { writeDataFile } = require('../utils/writeData')
const { resolve } = require('path')
const getAll = () => {
    return new Promise(res => {
        res(todos)
    })
}
const getById = (id) => {
    return new Promise(resolve => {
        let todo = todos.find(todo => todo.id == id)
        resolve(todo)
    })
}
const createOneTodo = (todo) => {
    return new Promise(resolve => {
        const newTodos = [...todos, todo]
        writeDataFile(path.resolve('models', 'todosModel.json'), newTodos)
        resolve(todo)
    })
}
const deleteTodoById = (id) => {
    return new Promise(resolve => {
        let newTodos = todos.filter(todo => todo.id != id)
        console.log(path.resolve('models', 'todosModel.json'));
        writeDataFile(path.resolve('models', 'todosModel.json'), newTodos, resolve)
    })
}

module.exports = {
    getAll,
    getById,
    deleteTodoById,
    createOneTodo
}
