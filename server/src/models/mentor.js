const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const mentorSchema =mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email is invalid')
            }
        }
    },
    password: {
        type: String,
        required: true,
        minlength: 7,
        trim: true,
        validate(value) {
            if (value.toLowerCase().includes('password')) {
                throw new Error('Password cannot contain "password"')
            }
        }
    },
    Field:{
        type: String,
        required: true,
        trim: true
    },
    linkedinProfile: {
        type:String,
        required: true,
        trim:true,
        validate(value)
        {
            const regex=/(https?)?:?(\/\/)?(([w]{3}||\w\w)\.)?linkedin.com(\w+:{0,1}\w*@)?(\S+)(:([0-9])+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
            if(!regex.test(value))
            {
                throw new Error('Invalid profile link');  
            }
        }
    },
    pic :{
        type:String,
        default: "https://img.icons8.com/bubbles/100/000000/user.png"
    },
    tokens: [{
        token: {
            type: String,
            required: true
        }
    }]
})

mentorSchema.methods.toJSON =function () {
    const mentor=this;
    const menObject=mentor.toObject();

    delete menObject.password;
    delete menObject.tokens;

    return menObject;
}

mentorSchema.methods.generateAuthToken = async function () {
    const men = this
    const token = jwt.sign({ _id: men._id.toString() }, 'secretmatch')

    men.tokens = men.tokens.concat({ token })
    await men.save()

    return token
}

mentorSchema.statics.findByCredentials = async (email, password) => {
    const men = await mentor.findOne({ email })

    if (!men) {
        throw new Error('Unable to login')
    }

    const isMatch = await bcrypt.compare(password, men.password)

    if (!isMatch) {
        throw new Error('Unable to login')
    }

    return men
}

// Hash the plain text password before saving
mentorSchema.pre('save', async function (next) {
    const men= this

    if (men.isModified('password')) {
        men.password = await bcrypt.hash(men.password, 8)
    }

    next()
})

const mentor = mongoose.model('mentor', mentorSchema);

module.exports = mentor;