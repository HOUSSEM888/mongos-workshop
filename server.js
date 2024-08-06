const express = require('express');
const app = express();
app.use(express.json())
const mongoose = require('mongoose');

const PORT = 5000




app.use('/user',require('./routes/user.route'))


mongoose.connect('your mongo URI')
.then(()=>  console.log('DataBase connected !!'))
.catch((err)=> console.log('err', err))

app.listen(PORT,(err)=>{
    err ? console.log('err', err) : console.log(`server is running on port : ${PORT}`)
})