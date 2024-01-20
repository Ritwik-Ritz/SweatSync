require('dotenv').config()
const User = require('../models/usermodel')
const jwt = require('jsonwebtoken')


const createToken = (_id)=>{
    return jwt.sign({_id:_id}, process.env.SECRET, {expiresIn:'2h'})
}

//login user
const LoginUser = async(req,res)=>{
    const {email, password} = req.body;

    try
    {
        //getting user after comparing passwords
        const user = await User.login(email, password);

        //creating jwt for user
        const token = createToken(user._id)
        res.status(200).json({email, token});
    }
    catch(error)
    {
        res.status(400).json({error:error.message})
    }
}

//signup user

const SignupUser = async(req,res)=>{
    const {email, password} = req.body;
    try
    {
        //getting user with hashed password
        const user = await User.signup(email, password);

        //creating jwt for user
        const token = createToken(user._id)
        res.status(200).json({email, token});
    }
    catch(error)
    {
        res.status(400).json({error:error.message})
    }
}

module.exports = {LoginUser, SignupUser};