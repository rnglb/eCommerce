import {useContext} from 'react';

import CartItemList from "../cartItemList/CartItemList";
import Button from '../../ui/button/Button';
import CartContext from '../../store/Data-context';
import classes from "./CartDetailsLayout.module.css";


const CartDetailsLayout = (props) =>{
    const cartContext = useContext(CartContext);

    return(
        <div className={classes.leftDiv}>
        <div className={classes.divHead}>
              <h1>My Cart({cartContext.totalCartItem})</h1>
              <p>Deliver to: some address.. (currently address is static)</p>
              <Button>Change</Button>
        </div>
        <CartItemList cartProductList={props.cartProductList}/>
        </div>
        
    )
}

export default CartDetailsLayout;

