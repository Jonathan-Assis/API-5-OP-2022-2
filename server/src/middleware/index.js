var jwt = require('jsonwebtoken');

const handleToken = (req, res, next) => {
    let token = req.headers['authorization'].split(' ')[1];
    jwt.verify(token, process.env.JWT_SAUCE, (err, result) => {
        if(!err){
            next()
        } else {
            res.status(401).json({ error: err })
        }
    })
}

module.exports = { handleToken }