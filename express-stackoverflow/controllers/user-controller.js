const ErrorHandler = require("../utils/error-handler")
const UserService = require('./../services/user-service')
const signup = async (req, res) => {
    try {
        const { email, firstName, lastName, password } = req.body
        const userData = await UserService.signup(email, password, firstName, lastName)
        res.json(userData)
    }
    catch (e) {
        console.log(e);
    }
}
module.exports = { signup }