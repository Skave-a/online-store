import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Footer } from './components/modules/Footer/Footer';
import { Header } from './components/modules/Header/Header';
import Page404 from './components/Pages/Page404/Page404';
import Main from './components/modules/Main/Main';
import Basket from './components/Pages/Basket/Basket';
import { FlowersType } from './components/types/types';

function App() {
  const [product, setProduct] = useState<FlowersType[]>(() => {
    return localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart') || '') : [];
  });
  const [totalQuantity, setTotalQuantity] = useState(() => {
    return Number(localStorage.getItem('badge')) ?? 0;
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(product));
    localStorage.setItem('badge', JSON.stringify(totalQuantity));
  }, [product, totalQuantity]);

  return (
    <BrowserRouter>
      <Header totalQuantity={totalQuantity} />
      <Routes>
        <Route
          path="/"
          element={
            <Main
              product={product}
              setProduct={setProduct}
              totalQuantity={totalQuantity}
              setTotalQuantity={setTotalQuantity}
            />
          }
        />
        <Route
          path="/basket"
          element={
            <Basket
              totalQuantity={totalQuantity}
              setTotalQuantity={setTotalQuantity}
              setProduct={setProduct}
              product={product}
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
