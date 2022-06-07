import {Routes, Route} from 'react-router-dom';
import {useState, useEffect , useContext} from 'react';
import Layout from './layout/Layout';
import Home from './pages/Home';
import Login from './pages/Login';
import Cart from './pages/Cart';
import ItemDetailsView from './components/itemDetails/ItemDetailsView';
import CartContext from './store/Data-context';

import './App.css';

function App() {
const [selectedItemId, setSelectedItemId]=useState("");
const cartContext= useContext(CartContext);

  const selectedItemHandler = (selectedItem) => {
    setSelectedItemId(selectedItem);
    }


    useEffect(() => {
        fetch(
          "http://localhost:4000/getCartData"
        )
          .then((response) => {
            return response.json();
          })
          .then((data) => {

for(let i=0;i<data.length;i++){
  const itemIsPresentInCart = cartContext.itemIsPresentInCart(data[i].cart_product_id);
  if(!itemIsPresentInCart){
    cartContext.addCartItem({
    id:data[i].cart_product_id,
    quantity:data[i].product_quantity,
      });
    }
}
            
              

          })
        }, []);

  return ( 
  <Layout>
     <Routes>
      <Route path='/' element={<Home selectedItemHandler={selectedItemHandler}/>} />
      <Route path='/account/login' element={<Login />} />
      <Route path='/viewcart' element ={<Cart />}/>
      <Route path={'/viewItem/'+selectedItemId} element ={<ItemDetailsView selectedItemId={selectedItemId}/>}/>
      <Route path={'/viewItem'} element ={<ItemDetailsView />}/>
     </Routes>
  </Layout>
  );
}


export default App;
