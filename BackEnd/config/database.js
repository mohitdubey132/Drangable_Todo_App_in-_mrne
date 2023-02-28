const mongoose = require('mongoose');

//creating connection with mongodb

exports.createDatabase =()=>{
    mongoose.set('strictQuery',true);
    mongoose.connect(process.env.mongoURL1 || 'mongodb://127.0.0.1:27017/Ecommers', { useNewUrlParser: true })
    .then(()=> console.log('data base connected'))
   
}