var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var productSchema = new Schema({
    product_id:String,
    product_name:String,
    product_brand_name:String,
    product_type:String,
    product_price:Number,
    product_discountInPercent:Number,
    product_size:Array,
    product_color:Array,
    product_seller:String,
    product_pictures:Array,
});

const products = mongoose.model("products", productSchema);
module.exports=products;