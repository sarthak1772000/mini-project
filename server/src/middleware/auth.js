const jwt = require('jsonwebtoken')
const student = require('../models/student')

const auth = async (req, res, next) => {
    try {
        const token = req.header('Authorization').replace('Bearer ', '')
        const decoded = jwt.verify(token, 'secretmatch')
        const stu = await student.findOne({ _id: decoded._id, 'tokens.token': token })

        if (!stu) {
            throw new Error()
        }

        req.token=token
        req.stu = stu
        next()
    } catch (e) {
        res.status(401).send({ error: 'Please authenticate.' })
    }
}

module.exports = auth