import './index.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';
import { Element } from 'react-scroll';
import { useState} from 'react';
import ThemeToggle from './components/ThemeToggle';
import themeContext from './Provider/ThemeContext';



function App() {

  const [theme, setTheme] = useState('light');
  
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <themeContext.Provider value = {{theme, toggleTheme}}>
      <div className={theme}>
        <ThemeToggle />
        <NavBar />
        <Element name='home'><Home /></Element>
        <Element name='about'><About /></Element>
        <Element name='skills'><Skills /></Element>
        <Element name='portfolio'><Portfolio /></Element>
        <Element name='contact'><Contact /></Element>
      </div>
    </themeContext.Provider>
  );
}

export default App;
