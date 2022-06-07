import { Link } from "react-router-dom";
import {useContext} from 'react';

import classes from './MainNavigation.module.css';
import CartContext from "../store/Data-context";

const MainNavigation =()=>{
    const cartContext = useContext(CartContext);
return(
    <div className={classes.divVar}>
        <div> React eCommerse</div>
        <div> <Link to='/'>Home</Link> </div> 
        <div> <Link to='/account/login'>Login</Link>  </div>
        <div> <Link to='/viewcart'>cart
        <span className={classes.badge}>
                {cartContext.totalCartItem}
                </span>
                </Link> </div>
    </div>
)
}

export default MainNavigation;