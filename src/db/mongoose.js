const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api',{
    useNewUrlParser:true,
    useCreateIndex:true
})

// const me = new User({
//     name:'    ayush  ',
//     email:'ayush@gmail.com ',
//     password:'aayush123@'
// })
// me.save().then(()=>{
//     console.log(me)
// }).catch((error)=>{
//     console.log("Error",error)
// })