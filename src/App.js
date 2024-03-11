import './index.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';

function App() {
  return (
    <div>
      <NavBar />
      <div id="home"><Home /></div>
      <div id="about"><About /></div>
      <div id="portfolio"><Portfolio /></div>
      <div id="contact"><Contact /></div>
    </div>
  );
}

export default App;
