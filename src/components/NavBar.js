import React from 'react'
import { Link } from 'react-scroll';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';




function NavBar() {

const [currentSection, setCurrentSection] = useState('home');

  return (
    <div className='navbar'>
        <h1 className="logo">My Portfolio</h1>
        <div className='menu-items'>
            <nav>
                <ul>
                    <li><Link onClick={()=> setCurrentSection('home')} style={currentSection === 'home' ? {color: 'red'} : {}} to="home" smooth={true} duration={1000}><FontAwesomeIcon icon={["fa-solid, fa-house"]} />Home</Link></li>
                    <li><Link onClick={()=> setCurrentSection('about')} style={currentSection === 'about' ? {color: 'red'} : {}} to="about" smooth={true} duration={1000}>About</Link></li>
                    <li><Link onClick={()=> setCurrentSection('portfolio')} style={currentSection === 'portfolio' ? {color: 'red'} : {}} to="portfolio" smooth={true} duration={1000}>Portfolio</Link></li>
                    <li><Link onClick={()=> setCurrentSection('contact')} style={currentSection === 'contact' ? {color: 'red'} : {}} to="contact" smooth={true} duration={1000}>Contact</Link></li>
                </ul>
            </nav>
        </div>    
    </div>
  )
}

export default NavBar