const { Patient } = require('./../models/index')
const getAllPatients = async (req, res) => {
    try {
        const patient = await Patient.findAll()
        res.json(patient)
    }
    catch (e) {
        console.log(e);
    }
}
const getOnePatient = async (req, res) => {
    try {
        const { id } = req.params
        const patient = await Patient.findOne({ where: { id } })
        if (!patient) {
            res.status(404).json({ message: 'Patient not found' })
        }
        res.status(200).json(patient)
    }
    catch (e) {
        console.log(e);
    }
}
const addPatient = async (req, res) => {
    try {
        const { firstName, lastName, email, password, image } = req.body
        const oldPatient = await Patient.findOne({ where: { email } })
        if (oldPatient) {
            res.status(401).json({ message: 'Patient whith this email already exist' })
        }
        const patient = await Patient.create({ firstName, lastName, email, password, image })
        res.status(200).json({ message: 'successfuly created', data: patient })
    }
    catch (e) {
        console.log(e);
    }
}
const deletePatient = async (req, res) => {
    try {
        const { id } = req.params
        const patient = await Patient.findOne({ where: { id } })
        if (!patient) {
            res.status(401).json({ message: 'Patient not found' })
        }
        await Patient.destroy({ where: { id } })
        res.status(200).json({ message: 'Patient deleted' })
    }
    catch (e) {
        console.log(e);
    }
}

const updatePatient = async (req, res) => {
    try {
        const { id } = req.params
        const { firstName, lastName, email, password, image } = req.body
        const patient = await Patient.findOne({ where: { id } })
        if (!patient) {
            res.status(401).json({ message: 'Patient not found' })
        }
        const oldPatient = await Patient.findOne({ where: { email } })

        if (email) {
            if (oldPatient.email !== email) {
                return res.json({ message: "email already in use" });
            }
        }
        await Patient.update({ firstName, lastName, email, password, image }, { where: { id } })
        res.status(200).json({ message: 'contact was updated' })
    }
    catch (e) {
        console.log(e);
    }
}

module.exports = {
    getAllPatients,
    getOnePatient,
    addPatient,
    deletePatient,
    updatePatient
}