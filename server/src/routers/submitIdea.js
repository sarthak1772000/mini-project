  
const express = require('express')
const submitIdea = require('../models/submitIdea')
const auth = require('../middleware/auth')
const auth1 = require('../middleware/auth1');
const router = new express.Router()


router.post('/submitIdea', auth , async (req,res) =>{
    const {email , groupName , leaderName, synopsis , abstract } =req.body;
    if(!email || !groupName || !leaderName || !abstract)
    {
        return res.status(422).json({error: "Please add all the fields"});
    }
    const submitidea= new submitIdea({
        email,
        groupName,
        leaderName,
        abstract,
        synopsis,
        owner:req.stu._id
    })
    submitidea.save().then(result => {
        res.json({submitidea: result})
    }) .catch(error => {
        console.log(error)
    })

})

router.get('/allideas' ,auth1, async (req,res) =>{
    try{
        const submitidea= await submitIdea.find().populate('owner')
        res.json({submitidea});
    }catch(e)
    {
        res.status(404).send(e);
    }
})

router.get('/getmyidea' ,auth ,async(req,res) =>{
    try{
       const submitidea= await submitIdea.find({owner: req.stu.id}).populate('owner');
       res.json({submitidea})
    }catch(e)
    {
        res.status(404).send(e);
    }
})
router.patch('/updatemyidea', auth, async(req,res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['groupName', 'email', 'leaderName', 'synopsis', 'abstract']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates!' })
    }
    try{
        //const tasks=await task.findById(req.params.id);
        const submitidea=await submitIdea.findOne({ owner:req.stu._id});
        //const tasks= await task.findByIdAndUpdate(req.params.id,req.body,{new:true, runValidators:true })
        
        if(!submitidea)
        {
            return res.status(404).send();
        }


        updates.forEach((update) => submitidea[update]=req.body[update])

        await submitidea.save();
        res.send(submitidea);
    }catch(e)
    {
        res.status(400).send(e);
    }
})

router.delete('/deleteidea', auth , async(req,res) =>{
    try{
        await submitIdea.deleteOne({owner:req.stu._id});
        res.send();
    } catch(e)
    {
        res.status(400).send(e);
    }

})

module.exports = router