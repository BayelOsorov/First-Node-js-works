const Router = require('express')
const data = require('../data')
const router = new Router()
router.get('/', (req, res) => {
    res.json(data)
})
router.post('/', (req, res) => {
    const { name } = req.body
    data.push({ name, id: Date.now() })
    res.json(data)

})
router.get('/:id', (req, res) => {
    const { id } = req.params
    const user = data.find(u => u.id == id)
    res.json(user)
})
router.delete('/:id', (req, res) => {
    const { id } = req.params
    data = data.find(u => u.id != id)
    res.json({ message: "user has been deleted" })
})
module.exports = {
    userRouter: router
}