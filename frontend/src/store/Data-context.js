import { createContext, useState } from "react";
import useGetFetch from "../customHook/useGetFetch";

const CartContext = createContext({
    cartItems: [],
    totalCartItem: 0,
    addCartItem: (cartItems)=>{},
    removeCartItem:(itemId)=>{},
    itemIsPresentInCart: (itemId)=>{},
});

export function CartContextProvider(props){
   const [cartItemList, setCartItemList] = useState([]);
   const [selectedItemId, setSelectedItemId]=useState("");

   const cartData = useGetFetch("http://localhost:4000/getCartData");
   if(cartData){
   for (let i = 0; i < cartData.length; i++) {
    const itemIsPresentInCart = itemIsPresentInCartHandler(cartData[i].cart_product_id);
    if (!itemIsPresentInCart) {
      addCartItemHandler({
        id: cartData[i].cart_product_id,
        quantity: cartData[i].product_quantity,
      });
    }
  }
}

    function addCartItemHandler(CartItem){
        setCartItemList((prevCartItemList) =>{
          return prevCartItemList.concat(CartItem);
        });
    }
    function removeCartItemHandler(CartItemId){
        setCartItemList((prevCartItemList) =>{
            return prevCartItemList.filter(CartItem =>CartItem.id !== CartItemId );
          });
    }
    function itemIsPresentInCartHandler(CartItemId){
     return cartItemList.some(CartItem => CartItem.id === CartItemId)
    }
    const contextValue = {
        cartItems: cartItemList,
        totalCartItem: cartItemList.length,
        addCartItem: addCartItemHandler,
        removeCartItem: removeCartItemHandler,
        itemIsPresentInCart: itemIsPresentInCartHandler,
      }
    
     return (
         <CartContext.Provider value={contextValue}>
             {props.children}
         </CartContext.Provider>
     )

}

export default CartContext;