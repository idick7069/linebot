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
      const customerExists = Customer.findCusomter(event.source.userId)
      if (!customerExists) {
        Customer.createCustomer(event.source.userId,profile.displayName)
      }
      createMessage(event.source.userId, event.message.text)
    });
  }
});

const linebotParser = bot.parser();
router.post('/', linebotParser);


module.exports = linebotParser;

// bot.push(event.source.userId,"嗨 " +bot.getUserProfile(event.source.userId).displayName)