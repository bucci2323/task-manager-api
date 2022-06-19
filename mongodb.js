// CRUD create read update delete

// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectId = mongodb.ObjectId

const {MongoClient, ObjectId} = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

// const id = new ObjectId()
// console.log(id.id.length)
// console.log(id.toHexString().length)


MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database!')
    }
   
    const db = client.db(databaseName)

db.collection('tasks').deleteOne({
    description : 'clean the house'
}).then((result)=>{
    console.log(result)
}).catch((error)=>{
    console.log(error)
})


})  






  // db.collection('tasks').findOne({_id: ObjectId("6298e6cad6ace64c1e97197a")} , (error,task) =>{
    //     console.log(task)
    // })

    // db.collection('tasks').find({completed:false}).toArray((error , task) =>{
    //     console.log(task)
    // })



    //  db.collection('users').updateOne({
//         _id: new ObjectId("6296adce78bde969b34768aa")
//     }, {
//  $inc : {
//     age:1
//     }
//     }).then((result)=>{
//     console.log(result)
//   }).catch((error) =>{
// console.log(error)
//   })



// db.collection('tasks').updateMany({
//     completed : false
// }, {
//     $set : {
//        completed : true 
//     }
// }).then((result) =>{
//     console.log(result.modifiedCount)
// }).catch((error)=>{
// console.log(error)
// })
