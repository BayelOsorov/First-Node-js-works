const Router = require('express')
const router = new Router()
const { getAllPatients, getOnePatient, addPatient, deletePatient, updatePatient } = require('./../controllers/patient-controller')
router.get('/', getAllPatients)
router.get('/:id', getOnePatient)
router.post('/', addPatient)
router.delete('/:id', deletePatient)
router.patch('/:id', updatePatient)
module.exports = router