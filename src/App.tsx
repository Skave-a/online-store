import './App.css';
import { Footer } from './components/modules/Footer/Footer';
import { Header } from './components/modules/Header/Header';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Footer />
      </header>
    </div>
  );
}

export default App;
