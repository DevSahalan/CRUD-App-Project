const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const Student = require('../models/Student')

//body parser
// parse application/x-www-form-urlencoded
router.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
router.use(bodyParser.json())

//initialize public
router.use(express.static('public'))




//save data to database

router.post('/add', (req, res)=>{
    Student.create(req.body)
    .then(post=>{
        console.log(post)
    }).catch(err=>{
        console.log(err)
    })
    res.redirect('/')
})


//show data

router.get('/', (req, res)=>{
    Student.find()
    .then(students =>{
        res.render('home', {
            data : students
        })
    })
    .catch(err =>{
        console.log(err)
    })
})


//export route
module.exports = router