const jwt = require('jsonwebtoken');
const User = require('../model/userSchema');

const Authenticate = async (req, res, next) => {
    try {
        const token = req.cookies.unq_tkn;
        const verifyToken = jwt.verify(token, process.env.SECRET_KEY);

        const rootUser = await User.findOne({_id:verifyToken._id, "tokens.token":token});

        if(!rootUser) {throw new Error("No root user found")}

        req.token = token;
        req.rootUser = rootUser;
        req.userID = rootUser._id;

        next();

    } catch(err) {
        return res.status(401).send("Unauthorize : No token found");
        console.log(err);
    }
}

module.exports = Authenticate;