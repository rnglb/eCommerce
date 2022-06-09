import ImageView from "../../ui/ImageView";
import Button from "../../ui/button/Button";
import classes from "./CartItemList.module.css";

const CartItemList = (props) =>{
    return(
<>
        {props.cartProductList.map((item)=>(
            <>
                <div className={classes.content}>
                    <div>
                    <ImageView src={'http://localhost:4000/img/' + item.product_pictures[0]} alt={'item image'} small/>
                    <div className={classes.quantity}> 
                        <Button Round>-</Button>
                        <Button small>2</Button>
                        <Button Round>+</Button>
                    </div>
                    </div>
                    <div>
                         <h4>{item.product_name}</h4>
                         <p>{item.product_color[0]}</p>
                         <p>Seller: {item.product_seller}</p>
                         <p>
                             <span style={{color:'gray', textDecoration:'line-through'}}>
                                 ₹{item.product_price}
                                 </span>
                            <span style={{fontWeight:'bold',fontSize:'20px'}}> 
                             ₹{Math.round(eval("item.product_price * item.product_discountInPercent /100"))}
                               </span>
                            <span style={{color:'green',fontWeight:'bold'}}>
                                {item.product_discountInPercent}% Off Discount applied </span>
                                </p>
                         <Button>SAVE FOR LATER</Button>
                         <Button>REMOVE</Button>
                    </div>
                    <div className={classes.deliveryContent}>
                        Delivery by Fri Jun 10 | Free₹40
                    </div>
                </div>
                </>
            ))}
            </>
    )
}

export default CartItemList;