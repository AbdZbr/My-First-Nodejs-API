require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')

// Corrected the connection string
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database'))

app.use(express.json())

const subscribersRouter = require('./routes/followers')
app.use('/subscribers', subscribersRouter)

app.listen(3000, () => console.log('Server Started'))

