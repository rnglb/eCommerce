import {useContext, useEffect, useState} from 'react';
import CartContext from '../store/Data-context';
import classes from './Cart.module.css';
var cartProductList=[];
const Cart = ()=> {
    const cartContext = useContext(CartContext);
    const [isLoading, toggleLoading] = useState(true)

var itemsArray=[];
    cartContext.cartItems.map((item)=>(
     itemsArray.push(item.id)
    ))

useEffect(() => {
        toggleLoading(true);
        console.log(itemsArray,'////-<');
          fetch(
            "http://localhost:4000/getProductDetailsByIds",
            {
                method: 'POST', // or 'PUT'
                mode: 'cors',
                cache: 'no-cache',
                credentials: 'same-origin',
                headers: {
                  'Content-Type': 'application/json',
                },  
                body: JSON.stringify({id:itemsArray}),
            } 
          )
            .then((response) => {
              return response.json();
            })
            .then((data) => {
                    cartProductList=data;
                    console.log(cartProductList);
                    toggleLoading(false);
                            })
          }, [cartContext.cartItems]);


//calculate final price and total amount
const finalPrice  = cartProductList.reduce(getPriceSum, 0);
const totalAmount = cartProductList.reduce(getTotalAmount, 0);

function getPriceSum(total, num) {
  return total + num.product_price;
}
function getTotalAmount(total, num) {
    return total + Math.round(eval("num.product_price * num.product_discountInPercent /100") );
  }
console.log(cartProductList);
if (isLoading) {
    return (
      <h1>Loading...</h1>
    )
  }
  else {
    return(
    <div className={classes.mainDiv}>
        <div className={classes.leftDiv}>
            <div className={classes.divHead}>
                  <h1>My Cart({cartContext.totalCartItem})</h1>
                  <p>Deliver to: some address.. (currently address is static)</p>
                  <button>Change</button>
            </div>
            {cartProductList.map((item)=>(
            <>
                <div className={classes.content}>
                    <div>
                    <div className={classes.image}> <img src={'http://localhost:4000/img/' + item.product_pictures[0]} alt='item image'/></div>
                    <div className={classes.quantity}> 
                        <button className={classes.quantityRoundDiv}>-</button>
                        <button className={classes.quantityDiv}>2</button>
                        <button className={classes.quantityRoundDiv}>+</button>
                    </div>
                    </div>
                    <div>
                         <h4>{item.product_name}</h4>
                         <p>{item.product_color[0]}</p>
                         <p>Seller: {item.product_seller}</p>
                         <p>
                             <span style={{color:'gray', textDecoration:'line-through'}}>₹{item.product_price}</span>
                            <span style={{fontWeight:'bold',fontSize:'20px'}}>  ₹{Math.round(eval("item.product_price * item.product_discountInPercent /100"))}  </span>
                            <span style={{color:'green',fontWeight:'bold'}}>{item.product_discountInPercent}% Off Discount applied </span></p>
                         <button>SAVE FOR LATER</button>
                         <button>REMOVE</button>
                    </div>
                    <div className={classes.deliveryContent}>
                        Delivery by Fri Jun 10 | Free₹40
                    </div>
                </div>
                </>
            ))}
        </div>
        <div>
        <div className={classes.rightDiv}>
           <div className={classes.bilheading}>PRICE DETAILS</div>
           
                <div className={classes.bilDetails}>
                      <p>Price ({cartContext.totalCartItem} items)</p>
                      <p>{finalPrice}</p>
                      </div>
                <div className={classes.bilDetails}>
                      <p>Discount</p>
                      <p style={{color:'Green',marginLeft:'-5px'}}>-{finalPrice-totalAmount}</p>
                      </div>
                <div className={classes.bilDetails}>
                      <p>Delivery Charges</p>
                      <p style={{color:'Green'}}>Free</p>
                      </div>
                <div className={classes.bilDetails} style={{paddingTop:'15px'}}>
                      <p>Total Amount</p>
                      <p>{totalAmount}</p>
                </div>
           <h4 style={{margin:'10px',color:'Green',fontWeight:'bold' }}>You will save ₹{finalPrice-totalAmount} on this order</h4>
        </div>
        <h4 style={{margin:'10px',color:'Gray',fontWeight:'bold' }}>Safe and Secure Payments.Easy returns.100% Authentic products.</h4>  

        </div>
    </div>
    )
            }
}

export default Cart;