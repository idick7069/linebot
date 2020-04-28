var express = require('express');
var linebot = require('linebot');
var Message = require('../models/Message')
var Customer = require('../models/Customer')
var app = express();
var router = express.Router();

var bot = linebot({
  channelId: '1610094615',
  channelSecret: '6847fe0b8509cbce59071e7ed168d1e1',
  channelAccessToken: 'Bb6aAfuWojNdoJQd75M+ApDcC+RPlELyJ4j18pCEaliT9ML6IKZ1KpvzkChUykwRashdJHugmcM8rn8Wx9uqY1pf8j1Ix3ZPqjNznn9PQhbzQf4WMV1/tUZiol4dE9NUcfUNiUInF2egxn7ft0GeVQdB04t89/1O/w1cDnyilFU='
});

bot.on('message', function (event) {
  console.log(event); //把收到訊息的 event 印出來看看
  if (event.message.type == 'text') {
    bot.reply(event.replyToken, "你是不是說了=>" + event.message.text)
    event.source.profile().then(function (profile) {
      console.log(JSON.stringify(profile))
      bot.push(event.source.userId, "嗨 " + profile.displayName)
      Customer.findOne({
        customer_id: event.source.userId
      }).exec(function (err, customer) {
        if (err) {
          return handleError(err);
        } else {
          console.log('The customer is %s', customer.customer_name);
          Customer.init()
          Customer.create({
            customer_id: event.source.userId,
            customer_name: profile.displayName
          }, function (err, awesome_instance) {
            if (err) {
              console.log(err)
            } else {
              console.log('新建顧客成功')
            }
            // saved!
          });
        }
      })
      Message.init()
      Message.create({
        customer_id: event.source.userId,
        message_content: event.message.text
      }, function (err, awesome_instance) {
        if (err) {
          console.log(err)
        } else {
          console.log('紀錄成功')
        }
      });
    });
  }
});

const linebotParser = bot.parser();
router.post('/', linebotParser);

router.get('/', function (req, res, next) {
  res.send('line webook connected')
});


module.exports = router;

// bot.push(event.source.userId,"嗨 " +bot.getUserProfile(event.source.userId).displayName)