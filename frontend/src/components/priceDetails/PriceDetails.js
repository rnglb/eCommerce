import {useContext} from 'react';
import CartContext from '../../store/Data-context';
import classes from "./PriceDetails.module.css";


const PriceDetails = (props) => {
    const cartContext = useContext(CartContext);
    //calculate final price and total amount
const finalPrice  = props.cartProductList.reduce(getPriceSum, 0);
const totalAmount = props.cartProductList.reduce(getTotalAmount, 0);

function getPriceSum(total, num) {
  return total + num.product_price;
}
function getTotalAmount(total, num) {
    return total + Math.round(eval("num.product_price * num.product_discountInPercent /100") );
  }
    return(
        <>
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
        </>
    )
}

export default PriceDetails;