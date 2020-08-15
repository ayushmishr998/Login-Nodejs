const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient
const ObjectID =  mongodb.ObjectID

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL,{useNewUrlParser:true},(error,client)=>{
    if(error){
        return console.log('unable to connect database ')
    }
    console.log('connected successfully')
     const db = client.db(databaseName)
    // db.collection('users').insertOne({
    //     name:'aayush',
    //     age:22
    // },(error,result)=>{
    //     if(error){
    //         console.log('unable to insert into database')
    //     }
    //     console.log(result.ops)
    // })
    // db.collection('users').insertMany([
    //     {
    //         name:'gautam',
    //         age:23
    //     },{
    //         name:'shashwat',
    //         age:24
    //     }
    // ],(error,result)=>{
    //     if(error){
    //         console.log("unable to insert data to database")
    //     }
    //     console.log(result.ops)
    // })
    // db.collection('users').findOne({name:'gautam'},(error,user)=>{
    //     if(error){
    //         console.log("unable to fetch data from database")
    //     }
    //     console.log(user)
    // })
    // db.collection('users').find({age:22}).toArray((error,users)=>{//find method returns cursor for that we use toArray method.
    //     console.log(users)
    // })
    // const updatePromise = db.collection('users').updateOne({
    //     _id: new ObjectID("5f11f9c97ea2b039186f3f73")
    // },{
    //     $set:{
    //         name:'anushree'
    //     }
    // })
    // updatePromise.then((result)=>{
    //     console.log(result)
    // }).catch((error)=>{
    //     console.log(error)
    // })
    db.collection('users').deleteMany({
        age:22
    }).then((result)=>{
        console.log(result)
    }).catch((error)=>{
        console.log(error)
    })


    
})