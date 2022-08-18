const express = require('express')
const app = express()
const dotenv = require('dotenv')
const mongoose = require('mongoose')
//Routes Imports
const authRoute = require('./routes/auth')


dotenv.config()

//DB connect
mongoose.connect(process.env.DB_CONNECT, () => console.log('Connected to DB'))

//middleware
app.use(express.json())

//route Middlewares
app.use('/user', authRoute)

const port = process.env.PORT || 5000

app.listen(port, () => console.log('Server is Running'))