const express= require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
const bcrypt= require('bcryptjs');
const authenticate = require('../middleware/authenticate');

require('../db/connection');
const User = require('../model/userSchema');


router.get('/about', (req, res) => {
    res.send('About route from the server');
});

router.get('/contact', (req, res) => {
    res.send('Contact route from the server');
});

router.get('/signin', (req, res) => {
    res.send('Log In route from the server');
});

router.get('/register', (req, res) => {
    res.send('Register route from the server');
});

router.post('/register', async (req,res) => {
console.log('inside register');
    const { name, email, phone, work, password, cpassword} = req.body;

    if(!name || !email || !phone || !work || !password || !cpassword) {
        return res.status(422).json({error:"*empty field"});
    }

    try{
        const userExist = await User.findOne({email:email});
        if(userExist) {
                return res.status(422).json({error:"*user already exists"});
        }
        else if( password != cpassword){
                return res.status(422).json({error:"*password are not matching"});
        }
        else{
            const user = new User({name, email, work, phone, password, cpassword});
            await user.save();
            res.status(201).json({message:"User Registered successfully"});
        }
    } catch(err){ 
        console.log(err)
    }
});

router.post('/signin', async (req,res) => {
    try{
        const {email, password} = req.body;

        if(!email || !password){
            return res.status(400).json({error:"*empty field"});
        }

        const userLogin = await User.findOne({email:email});
        if(userLogin){
            const isMatch = await bcrypt.compare(password, userLogin.password);

            const token = await userLogin.generateAuthToken();
            res.cookie("unq_tkn", token, {
                expires: new Date(Date.now() + 25892000000),
                httpOnly:true
            });

            if(!isMatch){
                res.status(400).json({err:"Invalid Credentials"});
            }else{
                res.json({message:"Sign in successfully"});
            }
        }
        else{
            res.status(400).json({err:"Invalid Credentials"});
        }
    
    } catch(err){
        console.log(err);
    }
});

router.get('/about', authenticate, (req, res)=>{
    console.log("Hello About");
    res.send("Hello server");
});

module.exports = router;