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
        <p className="position">Full Stack Developer</p>
        <p className="website-links"><a href="https://alinares.ca" title="Website">alinares.ca</a></p>
      </div>
      <div className="call-to-actions">
        <a href="mailto:therealalinares@gmail.com" title="therealalinares@gmail.com" target="_blank"><i className="fa-solid fa-envelope btn-icon"></i>Email</a>
        <a href="https://www.linkedin.com/in/
ali-linares" target="_blank"><i className="fa-brands fa-linkedin btn-icon"></i>LinkedIn</a>
      </div>
    </header>
  );

}

export default Header;