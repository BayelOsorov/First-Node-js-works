const jwt = require('jsonwebtoken')
const { ACCESS_SECRET_KEY, REFRESH_SECRET_KEY } = process.env
const generateTokens = (data) => {
    const accessToken = jwt.sign(data, ACCESS_SECRET_KEY, { expiresIn: '24h' })
    const refreshToken = jwt.sign(data, REFRESH_SECRET_KEY, { expiresIn: '72h' })
}
module.exports = {
    generateTokens
}