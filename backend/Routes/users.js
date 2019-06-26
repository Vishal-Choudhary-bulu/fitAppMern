const router = require('express').Router()


let User = require('../Models/user.model')

router.route('/').get((req,res)=>{
    User.find()
    .then(users=>res.json(users))
    .catch(err => res.status(400).json('Error : '+ err))
})

router.route('/add').post((req, res)=>{
    const username = req.body.username

    const newUser = new User({username})

    newUser.save()
    .then(()=> res.json('new user added!!! '))
    .catch(err=> res.status(400).json('adding user failed'+ err))
})

module.exports = router