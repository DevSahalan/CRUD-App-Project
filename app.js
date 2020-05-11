const express = require('express')
const mongoose = require('mongoose')
const ejs = require('ejs')
const app = express()
const port = process.env.PORT || 7000
const homeRoute = require('./routes/home')
require('dotenv').config()
//connect database
mongoose.connect(process.env.DATA_id, 
{ useNewUrlParser: true, useUnifiedTopology: true })

.then(()=>{
    console.log("connected to Mongodb Successfully")
})
.catch(err =>{
    console.log("failed to connect with database")
})

mongoose.set('useFindAndModify', false)

//set views
app.set('view engine', 'ejs')


//initialize routes
app.use('/', homeRoute)




app.listen(port, () => {
    console.log(`server is started at ${port}`)
})
