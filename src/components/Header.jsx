import avatar from "../assets/images/shadow-me.jpg";
import '../assets/css/App.css';
import {useState} from 'react';
import Heart from "../components/Heart";

function Header(){

  const [liked, setLiked] = useState(false);
  function handleLike(){
    setLiked( prev => !prev );
  }

  
  return(
    <header>
      <div>
        <Heart isLiked={liked} handleClick={handleLike} />
        <div className='avatar'>
          <img src={avatar} alt="Picture of my silhouette" width="100%" />
        </div>
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