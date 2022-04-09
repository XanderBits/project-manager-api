require('dotenv').config()
const express = require('express')
const app = express();
const {dbConnect} = require('./config/mongo.js')

const PORT = process.env.PORT || 3000

app.use(require('./app/routes'))
app.use(express.json())
app.use(express.urlencoded({extended : true}));

dbConnect()

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})