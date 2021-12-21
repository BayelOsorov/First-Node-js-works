const Router = require('express')
const router = new Router()
const doctorRoutes = require('./doctor-routes.js')
const patientRoutes = require('./patient-routes')
router.use('/doctor', doctorRoutes)
router.use('/patient', patientRoutes)
module.exports = router