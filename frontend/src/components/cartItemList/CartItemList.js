import ImageView from "../../ui/ImageView";
import CartItmQuantity from "./cartItemQuantity/CartItemQuantity";
import CartItemDetails from "./cartItemDetails/CartItemDetails";
import classes from "./CartItemList.module.css";

const CartItemList = (props) =>{
    return(
<>
        {props.cartProductList.map((item)=>(
            <>
                <div className={classes.content}>
                    <div>
                    <ImageView src={'http://localhost:4000/img/' + item.product_pictures[0]} alt={'item image'} small/>
                    <CartItmQuantity />
                    </div>
                     <CartItemDetails 
                        product_name={item.product_name}
                        product_color={item.product_color[0]}
                        product_seller={item.product_seller}
                        product_price={item.product_price}
                        product_discountInPercent={item.product_discountInPercent}
                        />
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