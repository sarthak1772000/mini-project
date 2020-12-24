const jwt = require('jsonwebtoken')
const mentor = require('../models/mentor')

const auth1 = async (req, res, next) => {
    try {
        const token = req.header('Authorization').replace('Bearer ', '')
        const decoded = jwt.verify(token, 'secretmatch')
        const men = await mentor.findOne({ _id: decoded._id, 'tokens.token': token })

        if (!men) {
            throw new Error()
        }

        req.token=token
        req.men = men
        next()
    } catch (e) {
        res.status(401).send({ error: 'Please authenticate.' })
    }
}

module.exports = auth1