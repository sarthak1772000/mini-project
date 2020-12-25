const mongoose=require('mongoose');
const validator=require('validator');

const submitSchema =  new mongoose.Schema({
    email: {
        type: String,
        unique: true,
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
    groupName:{
        type: String
    },
    leaderName: {
        type: String
    },
    abstract: {
        type: String
    },
    synopsis:{
        type: String,
        default:"Nothing"
    },
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'student'
    }
})

const submitIdea=mongoose.model('submitIdea',submitSchema);
module.exports=submitIdea