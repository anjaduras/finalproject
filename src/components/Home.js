import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

function Home() {
  const temporary = "images/blue.png"
  const emoji1 = "images/emoji.png"
  const emoji2 = "images/emoji1.png"
  const emoji3 = "images/emoji2.png"
  const emoji4 = "images/emoji3.png"
  const emoji5 = "images/emoji4.png"
  const me = "images/me.jpg"
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
        <img src={emoji1} alt="" width={50} />
        <img src={emoji2} alt="" width={50} />
        <img src={emoji4} alt="" width={40} />
      </header>

      <div className='infocard'>
        <h2>WAS IST UGS?</h2>
        <img src={emoji1} alt="" width={50} />
        <p>Die Ukrainische Gebärdensprache (UGS) ist eine Kommunikationsform, die von Gehörlosen und hörgeschädigten Menschen in der Ukraine verwendet wird. Sie basiert auf Handgesten und Körperbewegungen, um Informationen zu vermitteln. UGS ist eine eigenständige und visuell orientierte Sprache, die eine effektive Kommunikation ermöglicht und die Gehörlosengemeinschaft in der Ukraine verbindet. </p>

      </div>

      <ul>
        <h3><li>230 K SPEAKERS</li></h3>
        <h3><li>100 YEARS OLD</li></h3>
        <h3><li>90 DIALECTS</li></h3>
      </ul>

      <div className='infocard'>
        <h2>WOFÜR IST DIESE SEITE?</h2>
        <img src={emoji2} alt="" width={50} />
        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores </p>
      </div>

      <div className='infocard'>
        <h2>HOW TO USE?</h2>
        <img src={emoji4} alt="" width={50} />
        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores </p>
      </div>

      <br />
      <h2>GO TO <Link to="/dictionary">DICTIONARY</Link></h2>
      <p>or try your luck and</p>
      <h2><Link to="/game">PLAY</Link></h2>
      <br />

      <div className='infocard'>
        <h2>WHO AM I?</h2>
        <img src={emoji3} alt="" width={50} />
        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores </p>
      </div>
      <img src={me} alt="" width={500} />
      
      <footer>
        <FaInstagram size={40} className='icon' />
        <FaLinkedin size={40} className='icon' />
        <FaGithub size={40} className='icon' />
      </footer>
    </div>
  );
}

export default Home;
