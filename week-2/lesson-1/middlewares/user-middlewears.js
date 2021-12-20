const authUser = (req, res, next) => {
    const { token } = req.headers;
    console.log('before request');
    if (token === 'valid') {
        next()
    } else {
        res.status = 401
        res.send('You are not authorized')
    }
}
module.exports = {
    authUser
}