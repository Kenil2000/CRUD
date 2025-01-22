const mongoose = require("mongoose");

mongoose.connect('mongodb://127.0.0.1/admin')

const db = mongoose.connection;

db.once('open',function(err){
  if(err){
    console.log("database not Connected")
  }
  console.log('Db Connected')
})

module.exports = db;

// mongoose.connect('mongodb+srv://kenilviradiya001:khv.2000@kenil.7lpen.mongodb.net/AdminData', { 
//   useNewUrlParser: true, 
//   useUnifiedTopology: true 
// })
// .then(() => console.log('Connected to MongoDB!'))
// .catch((error) => console.error('Connection error:', error));