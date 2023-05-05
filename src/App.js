import { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";
function App() {
  const [showCart, setShowCart] = useState(false);
  const showCartDataHandler = () => {
    setShowCart(true);
  };
  const hideCartDataHandler = () => {
    setShowCart(false);
  };
  return (
    <CartProvider>
      {showCart && <Cart onHideCart={hideCartDataHandler} />}
      <Header onShowCart={showCartDataHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
