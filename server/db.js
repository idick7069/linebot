const mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost:27017/linebot');
if(process.env.MONGODB_URI === undefined){
    mongoose.connect('mongodb://localhost:27017/linebot');
}else{  
mongoose.connect(process.env.MONGODB_URI)
}
const db = mongoose.connection;
db.on('error', err => console.error('connection error', err));
db.once('open', db => console.log('Connected to MongoDB'))
module.exports = db