require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const { authUser } = require('./middlewares/user-middlewears')
const app = express()
const PORT = process.env.PORT || 5000
const { routes } = require('./routes/index')
app.use(express.json())
app.use(express.static('./public'))
app.use(morgan('tiny'))
// app.use(authUser)
app.use('/api', routes)
// app.get('/', (req, res) => {
//     res.send('Helo World')
// })
// app.get('/users', (req, res) => {
//     res.json(data)
// })
// app.get('/users/:id', (req, res) => {
//     const { id } = req.params
//     const { q } = req.query
//     let user
//     if (q) {
//         user = data.find(user => user.name == q)
//     } else {
//         user = data.find(user => user.id == id)
//     }
//     res.status = 200
//     res.json(user)
// })
// app.post('/users', (req, res) => {
//     const { name } = req.body
//     data.push({ name, id: Date.now() })
//     res.json(data)
// })
app.listen(PORT, () => {
    console.log('server running on port ' + PORT);
})
module.exports = { data }