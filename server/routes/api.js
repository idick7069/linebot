var express = require('express');
var app = express();
var router = express.Router();
var customerApi = require('../customerApi')
var messageApi = require('../messageApi')




// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
});

router.use('/customers',customerApi)

router.use('/messages',messageApi)


// mount the router on the app
router.use('/', router);

module.exports = router;