const express = require('express')
require('./db/mongoose')
const User = require('./models/user')
const userRouter = require('./routers/users')
const app = express()

const port = process.env.PORT || 3000
app.use(express.json())
app.use(function(req, res, next) {
   res.header("Access-Control-Allow-Origin", "*");
   res.header("Access-Control-Allow-Headers","Origin, X-Requested-With,Content-Type,Accept,Authorization");
   res.header('Access-Control-Allow-Methods','GET,PUT,PATCH,POST,DELETE,OPTIONS');
   next();
});
app.use(userRouter)

app.listen(port,()=>{
    console.log('server is up on port'+port);
})
// const bcrypt = require('bcryptjs')
// const myFunction = async () =>{
//     const password = 'aayush1234'
//     const hashedpassword = await bcrypt.hash(password, 8)
//     console.log(password)
//     console.log(hashedpassword);
//     const isMatch = await bcrypt.compare('aayush1234',hashedpassword)
//     console.log(isMatch);
// }
// myFunction()
const jwt = require('jsonwebtoken')
const myFunction = async () =>{
    const token = jwt.sign({ _id:'abc123'},"aayushmishra")
    console.log(token)
    const data = jwt.verify(token,'aayushmishra')
    console.log(data)
}
myFunction()