var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Customer = new Schema({
    customer_id: String,
    customer_name: String,
    customer_picture_url: String
});

Customer.statics.findCusomter = function(customerId) {
    var name = Customer.findOne({
      customer_id: customerId
    }).exec(function (err, customer) {
      if (err) return handleError(err);
      console.log('The customer is %s', customer.customer_name);
    })
    if (name != null) {
      return true
    } else {
      return false
    }
  };
Customer.statics.createCustomer = function(customerId,customerName){
    Customer.init()
    Customer.create({
      customer_id: customerId,
      customer_name: customerName
    }, function (err, awesome_instance) {
      if (err) {
        console.log(err)
      } else {
        console.log('新建顧客成功')
      }
      // saved!
    });
}

module.exports = mongoose.model('Customer',Customer)