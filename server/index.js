const express = require('express')
require('./src/db/mongoose')
const mentorRouter = require('./src/routers/mentor')
const studentRouter = require('./src/routers/student')

const jwt = require('jsonwebtoken')
var cors = require('cors')
const app = express()
const port = process.env.PORT || 5000

app.use(cors());
app.use(express.json())
app.use(mentorRouter)
app.use(studentRouter)

app.use((req, res, next) => {
    res.status(503).send('Site is currently down. Check back soon!')
})

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})