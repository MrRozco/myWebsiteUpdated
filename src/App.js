import './index.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';
import { Element } from 'react-scroll';

function App() {
  return (
    <div>
      <NavBar />
      <Element name='home'><Home /></Element>
      <Element name='about'><About /></Element>
      <Element name='skills'><Skills /></Element>
      <Element name='portfolio'><Portfolio /></Element>
      <Element name='contact'><Contact /></Element>
    </div>
  );
}

export default App;
