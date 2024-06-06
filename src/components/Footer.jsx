import React from 'react';
import '../assets/css/App.css';

function Footer(){
  
  return(
    <footer>
      <section className="section-1" >
        <ul>
          <li><a href="https://github.com/alilinares" title="Github Profile" target="_blank" ><i className="fa-brands fa-github social-link"></i></a></li>
          <li><a href="" title="https://www.twitch.tv/Twitch Channel" target="_blank"><i className="fa-brands fa-twitch social-link"></i></a></li>
          <li><a href="https://youtube.com" title="Youtube Channel" target="_blank"><i className="fa-brands fa-youtube social-link"></i></a></li>
        </ul>
      </section>
      <section className="section-2">
        <p>2024 &copy; Ali Linares</p>
      </section>
    </footer>
  );

}

export default Footer;