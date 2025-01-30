const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/admin')

const db = mongoose.connection;

db.once('open',function(err){
  if(err){
    console.log("database not Connected")
  }
  console.log('Db Connected')
})

module.exports = db;

