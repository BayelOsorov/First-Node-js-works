const url = require('url')
const link = 'http://localhost:5000/user/auth/profile?year=2000&month=november'
const query = url.parse(link, true)
console.log(query);