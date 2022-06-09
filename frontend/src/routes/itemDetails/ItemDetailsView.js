import {  useContext } from 'react';
import { useNavigate } from "react-router-dom";
import CartContext from '../../store/Data-context';
import ImageView from '../../ui/ImageView';
import usePostFetch from '../../customHook/usePostFetch';
import Heading from '../../ui/Heading';
import classes from './ItemDetailsView.module.css';

let productDetails = null;
const ItemDetailsView = () => {
  let navigate = useNavigate();
  const cartContext = useContext(CartContext);
  const itemIsPresentInCart = cartContext.itemIsPresentInCart(cartContext.selectedItemId);

  productDetails = usePostFetch("http://localhost:4000/productDetails",{ id: cartContext.selectedItemId });
  
  function cartStatusHandler() {
    fetch(
      "http://localhost:4000/saveCartData",
      {
        method: 'POST', // or 'PUT'
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id: cartContext.selectedItemId, quantity: 1 }),
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        if (!itemIsPresentInCart) {
          cartContext.addCartItem({
            id: cartContext.selectedItemId,
            quantity: 1,
          });
        }
        navigate("../viewcart/", { replace: true });
      })
  }

  if (productDetails==null) {
    return (
      <h1>Loading...</h1>
    )
  }
  else {
    return (
      <div className={classes.container}>
        <ImageView src={'http://localhost:4000/img/' + productDetails[0].product_pictures[0]} alt={'seledted Img'} />

        <div className={classes.content}>
          <Heading Large>{productDetails[0].product_name}</Heading>
          <p>{productDetails[0].product_color[0]}</p>
          <p>{productDetails[0].product_price}</p>
          <button onClick={cartStatusHandler}>Add to cart</button>
        </div>
      </div>
    )
  }
}

export default ItemDetailsView;