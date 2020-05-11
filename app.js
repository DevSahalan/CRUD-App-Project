const express = require('express')
const mongoose = require('mongoose')
const ejs = require('ejs')
const app = express()
const port = process.env.PORT || 7000
const homeRoute = require('./routes/home')
//connect database
mongoose.connect('mongodb://127.0.0.1:27017/Crud_Project', 
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