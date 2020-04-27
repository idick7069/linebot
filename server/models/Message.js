var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Message = new Schema({
    customer_id: String,
    message_content: String,
    message_date: {
        type: Date,
        default: Date.now
    }
});

function createMessage(customerId, content) {
    Message.init()
    Message.create({
      customer_id: customerId,
      message_content: content
    }, function (err, awesome_instance) {
      if (err) {
        console.log(err)
      } else {
        console.log('紀錄成功')
      }
    });
  }

module.exports= mongoose.model('Message', Message);