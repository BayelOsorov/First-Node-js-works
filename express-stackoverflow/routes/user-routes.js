const router = require('express').Router()
const UserController = require('./../controllers/user-controller')
router.post('/signup', UserController.signup)
router.get('/', UserController.getAll)
router.post('/login', UserController.login)
module.exports = router