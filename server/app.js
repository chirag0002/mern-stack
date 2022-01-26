const dotenv = require('dotenv');
const express = require('express');
const mongoose = require('mongoose');
const app = express();
dotenv.config({path:'./config.env'});
require('./db/connection');
app.use(express.json());
app.use(require('./router/auth'));
const User = require('./model/userSchema');

const PORT=process.env.PORT;

const middleware = (req, res, next)=>{
    console.log('middleware');
    next();
}

app.get('/', (req, res) => {
    res.send('Hello route from the server');
});

app.get('/about', middleware, (req, res) => {
    res.send('About from the server');
});

app.get('/contact', (req, res) => {
    res.send('Contact from the server');
});

app.get('/signin', (req, res) => {
    res.send('Log In from the server');
});

app.get('/signup', (req, res) => {
    res.send('Register from the server');
});


app.listen(PORT, ()=> {
    console.log(`server is running at port ${PORT}`);
})