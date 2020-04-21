var mongoose = require( 'mongoose' );
var Schema   = mongoose.Schema;
 
var Customer = new Schema({
    customer_id    : String,
    customer_name   : String
});

var Order = new Schema({
    
});

mongoose.model( 'Customer', Customer );
mongoose.connect( 'mongodb://localhost/express_linebot' );