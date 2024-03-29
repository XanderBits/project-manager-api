require('dotenv').config()
const express = require('express')
const app = express();
const {dbConnect} = require('./config/mongo.js')


app.use(express.json())
app.use(express.urlencoded({extended : true}));
app.use(require('./app/routes'))

dbConnect()

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})