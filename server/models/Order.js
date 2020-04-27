var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Order = new Schema({
    order_create_datetime: {
        type: Date,
        default: Date.now
    },
    order_booking_datetime: {
        type: Date,
        default: Date.now
    },
    order_booking_peoples: Int,
    order_ps: String,
    order_customer_name: String,
    order_phone_number: Int,
    customer_id: String
});



module.exports = mongoose.model('Order', Order);