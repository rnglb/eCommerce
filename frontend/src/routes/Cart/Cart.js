import { useContext, useEffect, useState } from 'react';
import CartContext from '../../store/Data-context';
import PriceDetails from '../../components/priceDetails/PriceDetails';
import CartDetailsLayout from '../../components/cartDetailsLayout/CartDetailsLayout';
import classes from './Cart.module.css';
var cartProductList = [];
const Cart = () => {
  const cartContext = useContext(CartContext);
  const [isLoading, toggleLoading] = useState(true)

  var itemsArray = [];
  cartContext.cartItems.map((item) => (
    itemsArray.push(item.id)
  ))

  useEffect(() => {
    toggleLoading(true);
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
        body: JSON.stringify({ id: itemsArray }),
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        cartProductList = data;
        console.log(cartProductList);
        toggleLoading(false);
      })
  }, [cartContext.cartItems]);

  if (isLoading) {
    return (
      <h1>Loading...</h1>
    )
  }
  else {
    return (
      <div className={classes.mainDiv}>
        <CartDetailsLayout cartProductList={cartProductList} />
        <div>
          <PriceDetails cartProductList={cartProductList} />
        </div>
      </div>
    )
  }
}

export default Cart;