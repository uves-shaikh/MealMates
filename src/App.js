import Header from './components/Layout/Header';
import './App.css';
import Meals from './components/Meals/Meals';
import CartProvider from './store/CartProvider';
import Cart from './components/Cart/Cart';
import { useState } from 'react';


function App() {

  const [cartIsShown,setCartIsShown] = useState(false)

  const showCartHandler = () => {
    setCartIsShown(true)
  }

  const hideCartHandler = () => {
    setCartIsShown(false)
  }

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header />

      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
