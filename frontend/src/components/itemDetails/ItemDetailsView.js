import { useEffect, useState, useContext } from 'react';
import { useNavigate } from "react-router-dom";
import CartContext from '../../store/Data-context';
import classes from './ItemDetailsView.module.css';
let productDetails;
const ItemDetailsView = (props) => {
  const [isLoading, toggleLoading] = useState(true)
  let navigate = useNavigate();

  const cartContext = useContext(CartContext);
  console.log('..........--<');
  const itemIsPresentInCart = cartContext.itemIsPresentInCart(props.selectedItemId);

  useEffect(() => {
    toggleLoading(true);
    fetch(
      "http://localhost:4000/productDetails",
      {
        method: 'POST', // or 'PUT'
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id: props.selectedItemId }),
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        productDetails = data[0];
        toggleLoading(false);
      })
  }, [props.selectedItemId]);

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
        body: JSON.stringify({ id: props.selectedItemId, quantity: 1 }),
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        if (!itemIsPresentInCart) {
          cartContext.addCartItem({
            id: props.selectedItemId,
            quantity: 1,
          });
        }
        navigate("../viewcart/", { replace: true });
      })
  }

  if (isLoading) {
    return (
      <h1>Loading...</h1>
    )
  }
  else {
    return (
      <div className={classes.container}>
        <div className={classes.image}>
          <img src={'http://localhost:4000/img/' + productDetails.product_pictures[0]} alt='seledted Img' />
        </div>
        <div className={classes.content}>
          <h1>{productDetails.product_name}</h1>
          <p>{productDetails.product_color[0]}</p>
          <p>{productDetails.product_price}</p>
          <button onClick={cartStatusHandler}>Add to cart</button>
        </div>
      </div>
    )
  }

}

export default ItemDetailsView;