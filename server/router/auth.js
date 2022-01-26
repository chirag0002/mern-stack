const express= require('express');
const router = express.Router();

require('../db/connection');
const User = require('../model/userSchema');

const middleware = (req, res, next)=>{
    console.log('middleware');
    next();
}

router.get('/', (req, res) => {
    res.send('Hello route from the server');
});

router.get('/about', middleware, (req, res) => {
    res.send('About route from the server');
});

router.get('/contact', (req, res) => {
    res.send('Contact route from the server');
});

router.get('/signin', (req, res) => {
    res.send('Log In route from the server');
});

router.get('/signup', (req, res) => {
    res.send('Register route from the server');
});

router.post('/signup', async (req,res) => {

    const { name, email, phone, work, password, cpassword} = req.body;

    if(!name || !email || !phone || !work || !password || !cpassword) {
        return res.status(422).json({error:"*empty field"});
    }

    try{
        const userExist = await User.findOne({email:email});
        if(userExist) {
                return res.status(422).json({error:"*user already exists"});
        }
        const user = new User({name, email, work, phone, password, cpassword});
        
        await user.save();
        res.status(201).json({message:"User Registered successfully"});
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
            res.json({message:"Sign in successfully"});
        }else{
            res.status(400).json({err:"Invalid Credentials"});
        }
    
    } catch(err){
        console.log(err);
    }
});

module.exports = router;