import { Routes, Route } from 'react-router-dom';
import { useContext } from 'react';
import Layout from './layout/Layout';
import Home from './routes/Home';
import Login from './routes/Login';
import Cart from './routes/Cart/Cart';
import ItemDetailsView from './routes/itemDetails/ItemDetailsView';
import CartContext from './store/Data-context';
import './App.css';

function App() {
  const cartContext = useContext(CartContext);
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/account/login' element={<Login />} />
        <Route path='/viewcart' element={<Cart />} />
        <Route path={'/viewItem/' + cartContext.selectedItemId} element={<ItemDetailsView />} />
      </Routes>
    </Layout>
  );
}

export default App;
