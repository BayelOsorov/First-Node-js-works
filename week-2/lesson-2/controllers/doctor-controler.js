const { Doctor } = require('../models/index')

const getAll = async (req, res) => {
    try {
        const doctors = await Doctor.findAll()
        res.json(doctors)
    }
    catch (e) {
        console.log(e);
    }
}
const getOne = async (req, res) => {
    try {
        const { id } = req.params
        const doctor = await Doctor.findOne({ where: { id } })
        if (!doctor) {
            return res.status(404).json({ message: "User not found" })
        }
        res.json(doctor)
    }
    catch (e) {
        console.log(e);
    }
}

const create = async (req, res) => {
    try {
        const { firstName, lastName, email } = req.body
        const oldDoctor = await Doctor.findOne({ where: { email } })
        if (!oldDoctor) {
            return res.status(400).json({ message: "User email already exists" })
        }
        const doctor = await Doctor.create({ firstName, lastName, email })
        res.status(200).json({ message: "created doctor", data: doctor })
    }
    catch (e) {
        console.log(e);
    }
}

const deleteOne = async (req, res) => {
    try {
        const { id } = req.params
        const doctor = await Doctor.destroy({ where: { id } })
        if (!doctor) {
            return res.status(400).json({ message: "User deleted" })
        }
        return res.status(400).json({ message: "user has been deleted" })


    }
    catch (e) {
        console.log(e);
    }
}

const updateOne = async (req, res) => {
    try {
        const { id } = req.params
        const { firstName, lastName, email } = req.body
        const doctor = await Doctor.findOne({ where: { id } })
        const doctorEmail = await Doctor.findOne({ where: { email } })
        if (doctorEmail) {
            return res.status(404).json({ message: "User email already exists" })
        }
        if (!doctor) {
            return res.status(404).json({ message: "User not found" })
        }
        const newDoctor = await Doctor.update({ firstName, lastName, email }, { where: { id } })
        res.status(200).json({ message: "doctor updated", data: newDoctor })

    }
    catch (e) {
        console.log(e);
    }
}


module.exports = {
    getAll,
    create,
    getOne,
    deleteOne,
    updateOne
}