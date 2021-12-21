const Router = require('express')
const router = new Router()
const { getAll, create, getOne, deleteOne, updateOne } = require('../controllers/doctor-controler')
router.get('/', getAll)
router.get('/:id', getOne)
router.post('/', create)
router.delete('/:id', deleteOne)
router.patch('/:id', updateOne)
module.exports = router