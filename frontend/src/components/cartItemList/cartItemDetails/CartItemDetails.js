import Button from "../../../ui/button/Button";

const CartItemDetails = (props) => {
 return(
    <div>
    <h4>{props.product_name}</h4>
    <p>{props.product_color[0]}</p>
    <p>Seller: {props.product_seller}</p>
    <p>
        <span style={{color:'gray', textDecoration:'line-through'}}>
            ₹{props.product_price}
            </span>
       <span style={{fontWeight:'bold',fontSize:'20px'}}> 
        ₹{Math.round(eval("props.product_price * props.product_discountInPercent /100"))}
          </span>
       <span style={{color:'green',fontWeight:'bold'}}>
           {props.product_discountInPercent}% Off Discount applied </span>
           </p>
    <Button onclickEvent={""}>SAVE FOR LATER</Button>
    <Button onclickEvent={""}>REMOVE</Button>
</div>
 )
}

export default CartItemDetails;