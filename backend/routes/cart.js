var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var cartSchema = new Schema({
    cart_product_id:String,
    product_quantity:Number,
});

const cartItems = mongoose.model("cartItems", cartSchema);
module.exports=cartItems;