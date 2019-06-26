const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

require('dotenv').config()

const app = express()
const port = process.env.port||5000

app.use(cors())
app.use(express.json())


const uri = process.env.ATLAS_URI
mongoose.connect(uri,{ useNewUrlParser: true, useCreateIndex: true })

const connection = mongoose.connection
connection.once('open', ()=>{
    console.log('A connection to the database was made')
})


const userRouter = require('./Routes/users')
const exerciseRouter = require('./Routes/exercises')


app.use('/users', userRouter)
app.use('/exercises', exerciseRouter)


app.listen(port, ()=>(console.log(`App is running on port :  ${port}`)))