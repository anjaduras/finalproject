import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import '../styles/Home.css';
import DecodingList from './DecodingList';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

function Home() {
  const temporary = "images/blue.png"
  const emoji1 = "images/emoji.png"
  const emoji2 = "images/emoji1.png"
  const emoji3 = "images/emoji2.png"
  const emoji4 = "images/emoji3.png"
  const emoji5 = "images/emoji4.png"
  const home1 = "images/home1.jpg"
  const home2 = "images/home2.jpg"
  const me = "images/me.jpg"
  const background = "images/flag.jpg"
  const items = ['230 K SPEAKERS', '100 YEARS OLD', '90 DIALECTS'];
  return (
    <div className='homeBody'>
      <header className='HomeHeader'>
        <div className='navbar'>
          <Link to="/njuracourse">NJURA COURSE</Link>
          <Link to="/international">INTERNATIONAL</Link>
          <Link to="/about">ABOUT</Link>
          {/* <button className='HomeButton'>Language</button> */}
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
        <img src={home1} alt="" width={500} />
      </div>
      
      <DecodingList items={items} />

      <div className='infocard'>
        <h2>WOFÜR IST DIESE SEITE?</h2>
        <img src={emoji2} alt="" width={50} />
        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores </p>
        <img src={home2} alt="" width={500} />
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
        <img src={me} alt="" width={300} />
        <p>Leidenschaftlicher Frontend-Entwickler mit vielen Ideen. Engagiert für die Schaffung benutzerfreundlicher Web-Erlebnisse. Detailorientiert mit Fokus auf qualitativ hochwertigem Code.
          <Link to="/about"> Get to know me better.</Link>
        </p>
        <br />
        <h3>Check out my <Link to="https://www.youtube.com/channel/UCuCxer1qR2BBeF99V_n3mKA">YouTube.</Link></h3>
      </div>
      {/* <img src={me} alt="" width={500} /> */}

      <footer>
        <a href="https://www.instagram.com/tashoklasna/">
          <FaInstagram size={50} className='icon' />
        </a>
        <a href="https://www.linkedin.com/in/annaduras/">
          <FaLinkedin size={50} className='icon' />
        </a>
        <a href="https://github.com/anjaduras">
          <FaGithub size={50} className='icon' />
        </a>
      </footer>
    </div>
  );
}

export default Home;
