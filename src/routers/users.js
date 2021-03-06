const express = require('express')
const router = new express.Router
const User = require('../models/user')

router.post('/users',async (req,res)=>{
    const user = new User(req.body)
    try{
   
        await user.save()
         const token = await user.generateAuthToken()
        res.send({user,token})
    }
    catch(e){
            res.status(400)
            res.send(e)
    }
})
router.post('/users/login', async(req,res)=>{
    try{
        const user = await User.findByCredentials(req.body.email,req.body.password)
        const token = await user.generateAuthToken()
        res.send({user,token})
    }catch(e){
        res.status(400).send()
    }
})
router.get('/users/:id',(req,res)=>{
    const _id = req.params.id
    User.findById(_id).then((user)=>{
        if(!user){
            return res.status(404).send()
        }
        res.send(user)
    }).catch((e)=>{
        res.status(500).send()
    })
})
router.get('/users',(req,res)=>{
    User.find({}).then((users)=>{
        res.send(users)      
    }).catch((e)=>{
        res.send(500)
        res.send(e)
    })
})
router.patch('/users/:id', async(req,res)=>{
    const updates = Object.keys(req.body)
    const allowUpdates = ['name','email','password','age']
    const isValidation = updates.every((update) => allowUpdates.includes(update))
    if(!isValidation){
        return res.status(400).send({error:'Invalid Update'})
    }
    try{
        const user = await User.findById(req.params.id)
        updates.forEach((update)=>{
            user[update] = req.body[update]
        })
        await user.save()
    //const user = await User.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators:true})
    if(!user){
        return res.status(404).send()
    }
    res.send(user)
    }
    catch(e){
        res.status(400).send()
    }
})
router.delete('/users/:id',async(req,res)=>{
    try{
    const user = await User.findByIdAndDelete(req.params.id)
    if(!user){
        return res.status(404).send()
    }
    res.send(user)
    }
    catch(e){
        res.status(500).send()
    }
})
module.exports = router