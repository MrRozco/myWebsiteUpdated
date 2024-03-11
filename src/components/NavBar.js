import React from 'react'
import { Link } from 'react-scroll';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faUser, faBriefcase, faList, faAddressBook } from '@fortawesome/free-solid-svg-icons';



function NavBar() {

const [currentSection, setCurrentSection] = useState('home');

  return (
    <div className='navbar'>
        <h1 className="logo">My Portfolio</h1>
        <div className='menu-items'>
            <nav>
                <ul>
                    <li><Link onClick={()=> setCurrentSection('home')} style={currentSection === 'home' ? {color: 'red'} : {}} to="home" smooth={true} duration={1000}><FontAwesomeIcon className="menu-icon" icon={faHouse} />Home</Link></li>
                    <li><Link onClick={()=> setCurrentSection('about')} style={currentSection === 'about' ? {color: 'red'} : {}} to="about" smooth={true} duration={1000}><FontAwesomeIcon className="menu-icon" icon={faUser} />About</Link></li>
                    <li><Link onClick={()=> setCurrentSection('skills')} style={currentSection === 'skills' ? {color: 'red'} : {}} to="skills" smooth={true} duration={1000}><FontAwesomeIcon className="menu-icon" icon={faList} />Skills</Link></li>
                    <li><Link onClick={()=> setCurrentSection('portfolio')} style={currentSection === 'portfolio' ? {color: 'red'} : {}} to="portfolio" smooth={true} duration={1000}><FontAwesomeIcon className="menu-icon" icon={faBriefcase} />Portfolio</Link></li>
                    <li><Link onClick={()=> setCurrentSection('contact')} style={currentSection === 'contact' ? {color: 'red'} : {}} to="contact" smooth={true} duration={1000}><FontAwesomeIcon className="menu-icon" icon={faAddressBook} />Contact</Link></li>
                </ul>
            </nav>
        </div>    
    </div>
  )
}

export default NavBar