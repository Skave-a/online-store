import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Footer } from './components/modules/Footer/Footer';
import { Header } from './components/modules/Header/Header';
import Page404 from './components/Pages/Page404/Page404';
import Main from './components/modules/Main/Main';
import Cart from './components/Pages/Cart/Cart';
import { FlowersType } from './components/types/types';

function App() {
  const [cart, setCart] = useState<FlowersType[]>(() => {
    return localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart') || '') : [];
  });
  const [totalQuantity, setTotalQuantity] = useState(() => {
    return Number(localStorage.getItem('badge')) ?? 0;
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
    localStorage.setItem('badge', JSON.stringify(totalQuantity));
  }, [cart, totalQuantity]);

  const totalCostCart = cart?.reduce(
    (acc, el) => acc + (el.priceTotal ? el.priceTotal : el.price),
    0
  );

  return (
    <BrowserRouter>
      <Header totalQuantity={totalQuantity} totalCostCart={totalCostCart} />
      <Routes>
        <Route
          path="/"
          element={
            <Main
              cart={cart}
              setCart={setCart}
              totalQuantity={totalQuantity}
              setTotalQuantity={setTotalQuantity}
            />
          }
        />
        <Route
          path="/cart"
          element={
            <Cart
              totalQuantity={totalQuantity}
              setTotalQuantity={setTotalQuantity}
              setCart={setCart}
              cart={cart}
              totalCostCart={totalCostCart}
            />
          }
        />
        {/* <Route path="/anyPage" element={< AnyPage/>} /> */}
        <Route path="*" element={<Page404 />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
