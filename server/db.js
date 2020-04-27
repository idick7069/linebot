const mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost:27017/linebot');
mongoose.connect('mongodb://heroku_m7jzgxp5:heroku_m7jzgxp5@ds215502.mlab.com:15502/heroku_m7jzgxp5')
const db = mongoose.connection;
db.on('error', err => console.error('connection error', err));
db.once('open', db => console.log('Connected to MongoDB'))
module.exports = db