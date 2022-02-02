const express= require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
const bcrypt= require('bcryptjs');
const authenticate = require('../middleware/authenticate');

require('../db/connection');
const User = require('../model/userSchema');


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
            console.log(token);
            res.cookie("jwtoken", token, {
                expires: new Date(Date.now() + 1000000),
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

router.get('/abouts', authenticate, (req, res)=>{
    res.send(req.rootUser);
});

router.get('/contacts', authenticate, (req, res) => {
    res.send(req.rootUser);
});

router.get('/logout', (req, res) => {
    res.clearCookie('jwtoken', {path:"/"});
    res.status(200).send("Log Out");
});


module.exports = router;