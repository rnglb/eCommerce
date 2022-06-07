import { createContext, useState } from "react";

const CartContext = createContext({
    cartItems: [],
    totalCartItem: 0,
    addCartItem: (cartItems)=>{},
    removeCartItem:(itemId)=>{},
    itemIsPresentInCart: (itemId)=>{}
});

export function CartContextProvider(props){
    const [cartItemList, setCartItemList] = useState([]);

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
        itemIsPresentInCart: itemIsPresentInCartHandler
     }
    
     return (
         <CartContext.Provider value={contextValue}>
             {props.children}
         </CartContext.Provider>
     )

}

export default CartContext;