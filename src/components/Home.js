import React from 'react';
import { Link } from 'react-router-dom';
import image from '../pictures/blue.png';
import '../styles/Home.css';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

function Home() {
  return (
    <div className='homeBody'>
      <header className='HomeHeader'>
        <div className='navbar'>
          <Link to="/game">GAME</Link>
          <Link to="/njuracourse">NJURA COURSE</Link>
          <Link to="/dictionary">DICTIONARY</Link>
          <Link to="/international">INTERNATIONAL</Link>
          <Link to="/about">ABOUT</Link>
          <button className='HomeButton'>Language</button>
          <button className='HomeButton'>Dark-Light theme</button>
        </div>
        <br />
        <h1>UKRAINISCHE GEBÄRDENSPRACHE</h1>
        <p>here will be emojies</p>
      </header>

      <div className='infocard'>
        <h2>WAS IST USL?</h2>
        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores </p>
        <img src={image} alt="" width={200} />
      </div>

      <ul>
        <h3><li>230 K SPEAKERS</li></h3>
        <h3><li>100 YEARS OLD</li></h3>
        <h3><li>90 DIALECTS</li></h3>
      </ul>

      <div className='infocard'>
        <h2>WOFÜR IST DIESE SEITE?</h2>
        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores </p>
        <img src={image} alt="" width={200} />
      </div>

      <div className='infocard'>
        <h2>HOW TO USE?</h2>
        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores </p>
        <img src={image} alt="" width={200} />
      </div>

      <br />
      <h2>GO TO <Link to="/dictionary">DICTIONARY</Link></h2>
      <p>or try your luck and</p>
      <h2><Link to="/game">PLAY</Link></h2>
      <br />

      <div className='infocard'>
        <h2>WHO AM I?</h2>
        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores </p>
        <img src={image} alt="" width={200} />
      </div>

      <footer>
        <FaInstagram size={40} className='icon'/>
        <FaLinkedin size={40} className='icon'/>
        <FaGithub size={40} className='icon'/>
      </footer>
    </div>
  );
}

export default Home;
