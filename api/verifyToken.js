const jwt = require('jsonwebtoken');

const verify = (req, res, next) => {
    const authHeader = req.headers.token;

    if(authHeader) {
        const token = authHeader.split(' ')[1];
        jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
        req.user = user;
        next();
        });
    } else{
        return res.status(401).json({message: 'You are not authorized'})
    }

};

module.exports = verify;