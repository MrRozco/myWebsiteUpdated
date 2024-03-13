import React from 'react'
import { useContext } from 'react';
import ThemeContext from '../Provider/ThemeContext';


const ThemeToggle = () => {

    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
      <button style={{
        position: 'fixed',
        top: '10px',
        right: '10px',
        zIndex: 1000
      }} onClick={toggleTheme}>
        {theme === 'light' ? '🌙' : '☀️'}
      </button>
    );
  };

export default ThemeToggle