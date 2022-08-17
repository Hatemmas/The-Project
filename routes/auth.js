const router = require('express').Router()
const User = require('../model/User')
const { registerValidation, validator, loginValidation } = require('../validation')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const auth = require('./verifyToken')

//Registration 
router.post('/register', registerValidation(), validator,  async (req, res) => {

    //Email existense check
    const emailExist = await User.findOne ({email: req.body.email})
    if (emailExist) return res.status(400).send('User Email already exists')

    //Password Hash
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(req.body.password, salt)

    // Create a new User
    const user = new User ({
        name: req.body.name,
        email: req.body.email, 
        password: hashedPassword
    })
    try {
        const savedUser = await user.save()
        res.send({User: user._id})
    } catch (err) {
        res.status(400).send(err)
    }
})

//Login
router.post('/login', loginValidation(), validator,  async (req, res) => {

    //Email existense check
    const user = await User.findOne ({email: req.body.email})
    if (!user) return res.status(400).send('Email or password is wrong')
    
    //Password Check
    const validPass = await bcrypt.compare(req.body.password, user.password)
    if(!validPass) return res.status(400).send('Email or password is wrong')

    //Token
    const token = jwt.sign({_id: user._id}, process.env.TOKEN_SECRET)
    res.header ('token', token).send(token)

    // res.send('Logged in')
})

module.exports = router