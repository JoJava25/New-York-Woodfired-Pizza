const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()

const app = express()

//Middleware
app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(cors())
app.use(express.static('public'))

//Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)

const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', ()=> {
    console.log("Connected to MongoDB")
})

//Start server
const PORT = 8000
app.listen(PORT, () => {
    console.log(`Server connceted on ${PORT}`)
})