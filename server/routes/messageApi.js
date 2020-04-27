var express = require('express');
var db = require('../db');
var app = express();
var router = express.Router();
var Customer = require('../models/Customer')
var Message = require('../models/Message')


router.get('/',async (req, res) => {
    const messages = await Message.find()
    res.send(messages)
    console.log(messages)
});

// // mount the router on the app
// router.use('/', router);

module.exports = router;