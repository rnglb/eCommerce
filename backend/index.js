require('./connection.js');
const mongoose=require('mongoose');
const Schema = require('mongoose').Schema;
const express = require('express')
const bodyParser=require('body-parser');
const app = express()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
const cors = require("cors");
app.use(cors());

const product = require('./routes/product.js');
const cartItems = require('./routes/cart.js');

app.get('/home', function (req, res) {
    res.send( "test node");
})

app.get('/img/:imgName', function (req, res) {
    var options = {
        root: './assets/'
    };
    var fileName = req.params.imgName;
        res.sendFile(fileName, options, function (err) {
            if (err) {
                console.log(err);
            } else {
                console.log('Sent:', fileName);
            }
        });
})
let viewedProducts=[];
app.post('/productDetails', function(req,res){
    console.log("i am getting selected product details..");
    viewedProducts.push(req.body.id);
    console.log(viewedProducts[viewedProducts.length-1]);
    var query = product.find({product_id:req.body.id});
    query.select('product_id product_name product_brand_name product_type product_price product_discountInPercent product_size product_color product_seller product_pictures');
    query.exec(function(err,data){
        if(err) return handleError(err);
        res.send(JSON.stringify(data));
    });
})
app.post('/getProductDetailsByIds', function(req,res){
    console.log("i am trying to get details for cart");
    var query = product.find({product_id:req.body.id});
    query.select('product_id product_name product_brand_name product_type product_price product_discountInPercent product_size product_color product_seller product_pictures');
    query.exec(function(err,data){
        if(err) return handleError(err);
        res.send(JSON.stringify(data));
    });
})

app.get('/productListDetails', function (req, res) {
    console.log("i am getting product data..");
    var query = product.find({});
    query.select('product_id product_name product_brand_name product_type product_price product_discountInPercent product_size product_color product_seller product_pictures');
    query.exec(function(err,data){
        if(err) return handleError(err);
        res.send(JSON.stringify(data));
    });
});

app.get('/getCartData',function(req,res){
    var query = cartItems.find({});
    query.select('cart_product_id product_quantity');
    query.exec(function(err,data){
        if(err) return handleError(err);
        res.send(JSON.stringify(data));
    });
})
app.post('/saveCartData', function(req,res){
    console.log("i am in adding data in cart...");
    var query = cartItems.find({cart_product_id:req.body.id});
    query.select('cart_product_id');
    query.exec(function(err,data){
        if(err) return handleError(err);
        var ret={};
        if(data.length>0){
            ret['response']="Data already in cart";
            res.send(JSON.stringify(ret));
        }
        else{
            SaveCartData(req);
            ret['response']="Done";
            res.send(JSON.stringify(ret));
        }
    });
})

app.get('/savedata',function(req,res){
    console.log("i am in saving product data...");
    SaveProductData();
    var ret={};
    ret['response']="Done";
    res.send(JSON.stringify(ret));
});

function SaveCartData(req){
    var cartItem1 = new cartItems({
        cart_product_id:req.body.id,
        product_quantity:req.body.quantity,
    });
    cartItem1.save(function(error){
    if(error){
        console.error(error);
  }
});
}

function SaveProductData(){
    var product1 = new product({
        product_id:'00013',
        product_name:'Men Artificial Leather Belt',
        product_brand_name:'KAEZRI ',
        product_type:'mblt',
        product_price:999,
        product_discountInPercent:80,
        product_size:['One size'],
        product_color:['Black','Brown','White',],
        product_seller:'KAEZRI',
        product_pictures:['mblt000131.webp','mblt000132.webp','mblt000133.webp','mblt000134.webp'],
    });
    product1.save(function(error){
    if(error){
        console.error(error);
  }
});
}


app.listen('4000',()=>{
    console.log("Server is running on port 4000");
});