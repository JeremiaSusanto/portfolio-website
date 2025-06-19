import React from 'react';

const HeaderSocials = () => {
  return (
    <div className="home__socials">
      <a 
        href="https://www.linkedin.com/in/jeremia-susanto-278655354/" 
        className="home__social-link" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        <i className="fa-brands fa-linkedin"></i>
      </a>
      
      <a 
        href="https://github.com/JeremiaSusanto" 
        className="home__social-link" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        <i className="fa-brands fa-github"></i>
      </a>
      
      <a 
        href="https://instagram.com/jeremia_s_" 
        className="home__social-link" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        <i className="fa-brands fa-instagram"></i>
      </a>
    </div>
  );
};

export default HeaderSocials;