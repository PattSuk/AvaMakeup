import './style/App.css';
import About from './components/About';
import Services from './components/Services';

function App() {
  return (
    <div className="App">
      <div className="hero">
        <h1 className="hero__title">Ava Professional Makeup Artist</h1>
      </div>
      <About />
      <Services />
    </div>
  );
}

export default App;
