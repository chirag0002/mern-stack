const dotenv = require('dotenv');
const express = require('express');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const app = express();
dotenv.config({path:'./config.env'});
require('./db/connection');

app.use(express.json());
app.use(cookieParser());
app.use(require('./router/auth'));

const User = require('./model/userSchema');



const PORT=process.env.PORT;


if (process.env.NODE_ENV == 'production') {
    app.use(express.static("client/build"));
}

app.listen(PORT, ()=> {
    console.log(`server is running at port ${PORT}`);
})