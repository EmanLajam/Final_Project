const express = require('express')

const router = express.Router();
const User = require('../controllers/userController');


router.get('/data', (req, res) => {
    res.send("data")
})

router.post('/data', User.addUser)

router.get('/register', (req, res) => {
    res.send("Register")
})


router.get('/login', (req, res) => {
    res.send("Login")
})


router.get('/participation', (req, res) => {
    res.send("participation")
})

router.get('/profile/:id', (req, res) => {
    res.send("profile" + req.params.id)
})

module.exports= router