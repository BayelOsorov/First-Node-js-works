const { User } = require("../models");
const ErrorHandler = require("../utils/error-handler");
const bcrypt = require('bcrypt');
const { USER_ALREADY_EXISTS } = require("../utils/const");
const { generateTokens } = require("../utils/tokens");
const signup = async (email, password, firstName, lastName) => {
    const oldUser = await User.findOne({ where: { email } })
    if (oldUser) {
        throw ErrorHandler.BadRequest(USER_ALREADY_EXISTS)
    }
    const hashedPassword = await bcrypt.hash(password, 3)
    const user = await User.create({ email, password: hashedPassword, firstName, lastName, role })
    const tokens = generateTokens({ id: user.id, email, role })
    return tokens
}
module.exports = {
    signup
}