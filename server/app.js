var linebot = require('linebot');
var express = require('express');
var path = require('path')
var serveStatic = require('serve-static')
var Api = require('./routes/api')
var app = express();
var router = express.Router();
var lineApi = require('./routes/lineApi')
var cors = require('cors');
var app = express();

const corsOptions = {
  origin: [
    'http://localhost:8081',
  ],
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
  allowedHeaders: ['Content-Type', 'Authorization'],
};

app.use(cors(corsOptions));

var bot = linebot({
  channelId: '1610094615',
  channelSecret: '6847fe0b8509cbce59071e7ed168d1e1',
  channelAccessToken: 'Bb6aAfuWojNdoJQd75M+ApDcC+RPlELyJ4j18pCEaliT9ML6IKZ1KpvzkChUykwRashdJHugmcM8rn8Wx9uqY1pf8j1Ix3ZPqjNznn9PQhbzQf4WMV1/tUZiol4dE9NUcfUNiUInF2egxn7ft0GeVQdB04t89/1O/w1cDnyilFU='
});

// bot.on('message', function (event) {
//   console.log(event); //把收到訊息的 event 印出來看看
//   if (event.message.type == 'text') {
//     bot.reply(event.replyToken, "你是不是說了=>" + event.message.text)
//     console.log("uid => " + event.source.userId)
//     event.source.profile().then(function (profile) {
//       console.log(profile.displayName)
//       console.log(JSON.stringify(profile))
//       bot.push(event.source.userId, "嗨 " + profile.displayName)
//     });
//     // bot.push(event.source.userId,"嗨 " +bot.getUserProfile(event.source.userId).displayName)
//   }
// });
// const linebotParser = bot.parser();
app.use('/line', lineApi);

app.use('/front', serveStatic(path.join(__dirname, '../dist')))
// app.use(express.static(__dirname + "../dist"));

// app.get(/.*/, function (req, res) {
//   res.sendFile(path.join(__dirname, '/dist/index.html'))
// })

app.use('/API',Api)

app.get('/', function (req, res) {
  res.send('hello world')
})


//因為 express 預設走 port 3000，而 heroku 上預設卻不是，要透過下列程式轉換
var server = app.listen(process.env.PORT || 8080, function () {
  var port = server.address().port;
  console.log("App now running on port", port);
});