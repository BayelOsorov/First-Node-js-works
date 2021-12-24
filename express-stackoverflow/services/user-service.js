const { User } = require("../models");
const ErrorHandler = require("../utils/error-handler");
const bcrypt = require('bcrypt');
const { v4: uuid } = require('uuid')
const { USER_ALREADY_EXISTS, NOT_FOUND, WRONG_CREDENTIALS } = require("../utils/const");
const { generateTokens } = require("../utils/tokens");
const { sendActivationMail } = require("./mail-service");

const signup = async (email, password, firstName, lastName, role) => {
    const oldUser = await User.findOne({ where: { email } })
    if (oldUser) {
        throw ErrorHandler.BadRequest(USER_ALREADY_EXISTS)
    }
    const hashedPassword = await bcrypt.hash(password, 3)
    const activationLink = uuid()
    const user = await User.create({ email, password: hashedPassword, firstName, lastName, role, activationLink })
    await sendActivationMail(email, `${process.env.API}/api/activate/${activationLink}`)
    const tokens = generateTokens({ id: user.id, email, role })
    return tokens
}
const login = async (email, password) => {
    const oldUser = await User.findOne({ where: { email } })
    if (!oldUser) {
        throw ErrorHandler.BadRequest(NOT_FOUND)
    }
    const comparePasssword = await bcrypt.compare(password, oldUser.password)
    if (!comparePasssword) {
        throw ErrorHandler.BadRequest(WRONG_CREDENTIALS)
    }
    const tokens = generateTokens({ id: oldUser.id, email, role: oldUser.role })
    return tokens
}
const getAll = async () => {
    return await User.findAll()
}
module.exports = {
    signup,
    getAll,
    login
}