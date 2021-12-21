require('dotenv').config()
const express = require('express')
const app = express()
const routes = require('./routes')
const PORT = process.env.PORT || 8000
const sequelize = require('./db')
const morgan = require('morgan')

app.use(express.json())
app.use((morgan('combined')))
app.use('/api', routes)
const runServer = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync()
        app.listen(PORT, () => {
            console.log('server is running on port ' + PORT);
        })
    }
    catch (e) {
        console.log(e);
    }
}
runServer()