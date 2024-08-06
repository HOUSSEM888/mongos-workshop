const express = require('express')
const User = require('../models/user.schema')
const router = express.Router()


const fakeData = {
    firstName : "Foulen-4" ,
    lastName : "Falten-4" ,
    email : "fou-4@email.com" ,
    age : 20
}

router.get('/add-user',(req,res)=>{
  const newPerson = new User(fakeData)
  newPerson.save()
  .then(()=> res.send("user saved success!!"))
  .catch((err)=> console.log(err))
})

router.get('/get-user/:id', (req,res)=>{
    const id = req.params.id
    
    User.findOne({_id:id})
    .then((data)=> res.json(data))
    .catch((err)=>console.log('err', err))
    

})

router.get('/delete-user/:id',(req,res)=>{
    const id = req.params.id

    User.deleteOne({_id:id})
    .then(()=>res.send('user deleted successfuly'))
    .catch((err)=> console.log('err',err)  )
})









module.exports=router