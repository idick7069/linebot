const mongoose = require('mongoose');
const Customer = require('./models/Customer')
const Message = require('./models/Message')

mongoose.connect('mongodb://localhost:27017/linebot');
const db = mongoose.connection;
db.on('error', err => console.error('connection error', err));
db.once('open', db => console.log('Connected to MongoDB'))
module.exports = db