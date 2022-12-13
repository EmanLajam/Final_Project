const db = require('../models')

const User = db.users

const addUser = async (req, res) =>{
    let info ={
        username: req.body.username,
        country: req.body.country,
        phone: req.body.phone,
        email: req.body.email,
        organization: req.body.organization
    }
    const user = await User.create(info)
    res.status(200).send(user)
    console.log(user)

}
module.exports = { addUser};