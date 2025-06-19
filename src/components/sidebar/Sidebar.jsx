import React, { useState } from 'react';
import "./sidebar.css";
import Logo from '../../assets/logo.svg';

const Sidebar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <aside className="aside">
      <a href="#home" className="nav__logo" onClick={closeMenu}>
        <img src={Logo} alt="Logo" />
      </a>

      {/* Burger Menu Button */}
      <button 
        className={`burger-menu ${isMenuOpen ? 'active' : ''}`}
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
        <div className="nav__menu">
          <ul className="nav__list">
            <li className="nav__item">
              <a href="#home" className="nav__link" onClick={closeMenu}>
                <i className="icon-home"></i>
                <span className="nav__text">Home</span>
              </a>
            </li>

            <li className="nav__item">
              <a href="#about" className="nav__link" onClick={closeMenu}>
                <i className="icon-user-following"></i>
                <span className="nav__text">About</span>
              </a>
            </li>

            <li className="nav__item">
              <a href="#services" className="nav__link" onClick={closeMenu}>
                <i className="icon-briefcase"></i>
                <span className="nav__text">Services</span>
              </a>
            </li>

            <li className="nav__item">
              <a href="#resume" className="nav__link" onClick={closeMenu}>
                <i className="icon-graduation"></i>
                <span className="nav__text">Resume</span>
              </a>
            </li>                <li className="nav__item">
              <a href="#portfolio" className="nav__link" onClick={closeMenu}>
                <i className="icon-layers"></i>
                <span className="nav__text">Portfolio</span>
              </a>
            </li>

            <li className="nav__item">
              <a href="#contact" className="nav__link" onClick={closeMenu}>
                <i className="icon-bubble"></i>
                <span className="nav__text">Contact</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Overlay */}
      <div 
        className={`nav__overlay ${isMenuOpen ? 'overlay-open' : ''}`}
        onClick={closeMenu}
      ></div>

      <div className="nav__footer">
        <span className="copyright">
          &copy; {new Date().getFullYear()}
        </span>
      </div>
    </aside>
  );
};

export default Sidebar;