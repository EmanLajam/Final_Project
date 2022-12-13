const express = require('express')

const router = express.Router();
const User = require('../controllers/userController');



router.get('/register', (req, res) => {
    res.send("Register")
})
router.post('/register', User.addUser)


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