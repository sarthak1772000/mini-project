const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const studentSchema = new mongoose.Schema({
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
            // if (!validator.isEmail(value)) {
            //     throw new Error('Email is invalid')
            // }
            const regex=/^[a-zA-Z]{2,}.[a-zA-Z]{2,}@walchandsangli.ac.in$/;
            if(!regex.test(value))
            {
                throw new Error('Only college students are allowed');   
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
    branch: {
        type:String,
        required: true,
        trim:true
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

studentSchema.methods.toJSON =function () {
    const student=this;
    const stuObject=student.toObject();

    delete stuObject.password;
    delete stuObject.tokens;

    return stuObject;
}

studentSchema.methods.generateAuthToken = async function () {
    const stu = this
    const token = jwt.sign({ _id: stu._id.toString() }, 'secretmatch')

    stu.tokens = stu.tokens.concat({ token })
    await stu.save()

    return token
}

studentSchema.statics.findByCredentials = async (email, password) => {
    const stu = await student.findOne({ email })

    if (!stu) {
        throw new Error('Unable to login')
    }

    const isMatch = await bcrypt.compare(password, stu.password)

    if (!isMatch) {
        throw new Error('Unable to login')
    }

    return stu
}

// Hash the plain text password before saving
studentSchema.pre('save', async function (next) {
    const stu= this

    if (stu.isModified('password')) {
        stu.password = await bcrypt.hash(stu.password, 8)
    }

    next()
})

const student = mongoose.model('student', studentSchema);

module.exports = student;
