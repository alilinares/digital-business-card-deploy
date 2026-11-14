import React from 'react';
import Avatar from "../assets/images/shadow-me.jpg";
import '../assets/css/App.css';

function Header(){
  
  return(
    <header>
      <div className='avatar'>
        <img src={Avatar} alt="Picture of my silhouette" width="100%" />
      </div>
      <div className="meta">
        <h1>Ali Linares</h1>
        <p className="position">Full Stack Web Developer</p>
        <p className="website-links"><a href="https://alilinares.com" title="Website">alilinares.com</a></p>
      </div>
      <div className="call-to-actions">
        <a href="mailto:contact@alilinares.com" title="contact@alilinares.com" target="_blank"><i className="fa-solid fa-envelope btn-icon"></i>Email</a>
        <a href="https://www.linkedin.com/in/alilinares/" target="_blank"><i className="fa-brands fa-linkedin btn-icon"></i>LinkedIn</a>
      </div>
    </header>
  );

}

export default Header;