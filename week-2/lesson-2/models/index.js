const sequelize = require('../db')
const { DataTypes } = require('sequelize')

const Doctor = sequelize.define('doctor', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    firstName: { type: DataTypes.STRING },
    lastName: { type: DataTypes.STRING },
    email: { type: DataTypes.STRING, unique: true }
})
const Patient = sequelize.define('patient', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    firstName: { type: DataTypes.STRING },
    lastName: { type: DataTypes.STRING },
    email: { type: DataTypes.STRING, unique: true, allowNull: false },
    password: { type: DataTypes.STRING, allowNull: false },
    image: { type: DataTypes.STRING }
})
const Specialization = sequelize.define('specialization', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    description: { type: DataTypes.TEXT },
    title: { type: DataTypes.STRING }
})
const Diagnose = sequelize.define('diagnose', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    details: { type: DataTypes.TEXT },
    title: { type: DataTypes.STRING }
})

Doctor.hasMany(Specialization)
Specialization.belongsTo(Doctor)

Diagnose.belongsTo(Patient)
Patient.hasMany(Diagnose)

Doctor.belongsToMany(Patient, { through: 'DoctorPatients' })
Patient.belongsToMany(Doctor, { through: 'DoctorPatients' })

module.exports = {
    Doctor,
    Patient,
    Specialization,
    Diagnose
}