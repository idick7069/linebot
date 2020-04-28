var express = require('express');
var db = require('../db');
var app = express();
var router = express.Router();
var Customer = require('../models/Customer')
var Message = require('../models/Message')

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
});

router.get('/', async (req, res) => {
    const customers = await Customer.find()
    res.send(customers)
    console.log(customers)
});

// 暫時使用get來add 之後要改post
router.get('/:name', async (req, res) => {
    Customer.init()
        Customer.create({
            customer_id:'123456',
             customer_name: req.params.id 
            }, function (err, awesome_instance) {
        if (err){
            console.log(err)
        }else{
            // const customers = await Customer.find()
            // res.send(customers)
        }
    });
});


router.get('/123', function (req, res, next) {
    res.send('hello world2')
});

// router.get('/messages',async (req, res) => {
//     const messages = await Message.find()
//     res.send(messages)
//     console.log(messages)
// });


module.exports = router;