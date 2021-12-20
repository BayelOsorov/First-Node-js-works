const { userRouter } = require('./userRouter')
const Router = require('express')
const router = new Router()
router.use('/users', userRouter)
module.exports = {
    router
}