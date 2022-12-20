import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Footer } from './components/modules/Footer/Footer';
import { Header } from './components/modules/Header/Header';
import Page404 from './components/Pages/Page404/Page404';
import Main from './components/modules/Main/Main';
import Basket from './components/Pages/Basket/Basket';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/basket" element={<Basket />} />
        {/* <Route path="/anyPage" element={< AnyPage/>} /> */}
        <Route path="*" element={<Page404 />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
