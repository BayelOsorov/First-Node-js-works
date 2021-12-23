require('dotenv').config()
const express = require('express')
const cors = require('cors')
const sequelize = require('./db')
const app = express()
const routes = require('./routes/index')
const PORT = process.env.PORT || 5000
app.use(cors())
app.use(express.json())
app.use('/api', routes)
const startServer = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => console.log('server running on port ' + PORT))
    }
    catch (e) {
        console.log(e);
    }
}
startServer()