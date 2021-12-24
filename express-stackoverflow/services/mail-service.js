const nodemailer = require('nodemailer')
const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASSWORD } = process.env
const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: SMTP_PORT,
    secure: false,
    auth: {
        user: SMTP_USER,
        pass: SMTP_PASSWORD
    }
})
const sendActivationMail = async (to, link) => {
    await transporter.sendMail({
        from: SMTP_USER,
        to,
        subject: 'Account activation',
        text: '',
        html: `
        <h1>Click to activate your account </h1>
        <a href="${link}">${link}</a>
        `
    })
}
module.exports = { sendActivationMail }