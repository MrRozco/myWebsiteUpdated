import React from 'react'
import { Link } from 'react-scroll';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faUser, faBriefcase, faList, faAddressBook } from '@fortawesome/free-solid-svg-icons';



function NavBar() {

const [currentSection, setCurrentSection] = useState('home');
const [isOpen, setIsOpen] = useState(false);

useEffect(() => {
  document.body.classList.toggle('open', isOpen)
}, [isOpen])

  return (
    <div>
      <div className={`navbar ${isOpen ? 'open' : ''}`} >
          <h1 className="logo">My Portfolio</h1>
          <div className='menu-items'>
              <nav>
                  <ul>
                      <li><Link activeClass="active" spy={true} offset={-70} onClick={()=> setCurrentSection('home')} 
                      style={currentSection === 'home' && document.querySelector('.active') &&
                      document.querySelector('.active').getAttribute('to') === 'home'
                      ? { color: 'red' }
                      : {}
                      } to="home" smooth={true} duration={1000}><FontAwesomeIcon className="menu-icon" icon={faHouse} />Home</Link></li>
                      
                      <li><Link activeClass="active" spy={true} offset={-70} onClick={()=> setCurrentSection('about')} 
                      style={currentSection === 'about' && document.querySelector('.active') &&
                      document.querySelector('.active').getAttribute('to') === 'about'
                      ? { color: 'red' }
                      : {}
                      }
                       to="about" smooth={true} duration={1000}><FontAwesomeIcon className="menu-icon" icon={faUser} />About</Link></li>
                      
                      <li><Link activeClass="active" spy={true} offset={-70} onClick={()=> setCurrentSection('skills')} 
                      style={currentSection === 'skills' && document.querySelector('.active') &&
                      document.querySelector('.active').getAttribute('to') === 'skills'
                      ? { color: 'red' }
                      : {}
                      }
                       to="skills" smooth={true} duration={1000}><FontAwesomeIcon className="menu-icon" icon={faList} />Skills</Link></li>
                     
                      <li><Link activeClass="active" spy={true} offset={-70} onClick={()=> setCurrentSection('portfolio')} 
                      style={currentSection === 'portfolio' && document.querySelector('.active') &&
                      document.querySelector('.active').getAttribute('to') === 'portfolio'
                      ? { color: 'red' }
                      : {}
                      }
                       to="portfolio" smooth={true} duration={1000}><FontAwesomeIcon className="menu-icon" icon={faBriefcase} />Portfolio</Link></li>
                      
                      <li><Link activeClass="active" spy={true} offset={-70} onClick={()=> setCurrentSection('contact')} 
                       style={currentSection === 'contact' && document.querySelector('.active') &&
                       document.querySelector('.active').getAttribute('to') === 'contact'
                       ? { color: 'red' }
                       : {}
                       }
                       to="contact" smooth={true} duration={1000}><FontAwesomeIcon className="menu-icon" icon={faAddressBook} />Contact</Link></li>
                  </ul>
              </nav>
          </div>    
      </div>
      <div className = 'hamburger' onClick = {() => setIsOpen(!isOpen)}>
        {isOpen ? 'X' : '☰'}
      </div>
    </div>
  )
}

export default NavBar