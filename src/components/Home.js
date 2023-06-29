import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import '../styles/Home.css';
import DecodingList from './DecodingList';
import { FaGithub, FaInstagram, FaLinkedin, FaMoon, FaSun, FaYoutube } from 'react-icons/fa';

function Home() {

  const [mouseXpercentage, setMouseXPercentage] = useState(0);
  const [mouseYpercentage, setMouseYPercentage] = useState(0);

  useEffect(() => {
    function handleMouseMove(event) {
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;
      const xPercentage = Math.round((event.pageX / windowWidth) * 100);
      const yPercentage = Math.round((event.pageY / windowHeight) * 100);
      setMouseXPercentage(xPercentage);
      setMouseYPercentage(yPercentage);
    }
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

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

    <div>
      <header className='radial-gradient ' style={{ background: `radial-gradient(at ${mouseXpercentage}% ${mouseYpercentage}%, #FFD600, #3C8AFF)` }}>
        <div className='HeaderContent'>
        <div className='navbar'>
          <Link to="/njuracourse" className='backLink'>NJURA COURSE</Link>
          <Link to="/international" className='backLink'>INTERNATIONAL</Link>
          <Link to="/about" className='backLink'>ABOUT</Link>
          <Link to="/contact" className='backLink'>CONTACT</Link>
          </div>
        <br />
        <h1>UKRAINISCHE GEBÄRDENSPRACHE</h1>
        <img src={emoji1} alt="" width={50} />
        <img src={emoji2} alt="" width={50} />
        <img src={emoji4} alt="" width={40} />
        </div>
      </header>

      <div className='infocard'>
        <div className='cardText'>
          <div className='cardName'>
            <h2> <span className='BethEllenPhrase'>Was</span> IST UGS?</h2>
            <img src={emoji1} alt="" width={40} />
            </div>
            <p>Die Ukrainische Gebärdensprache (UGS) ist eine Kommunikationsform, die von Gehörlosen und hörgeschädigten Menschen in der Ukraine verwendet wird. Sie basiert auf Handgesten und Körperbewegungen, um Informationen zu vermitteln. UGS ist eine eigenständige und visuell orientierte Sprache, die eine effektive Kommunikation ermöglicht und die Gehörlosengemeinschaft in der Ukraine verbindet. </p>
          
        </div>
        <img src={home1} alt="" width={500} />
      </div>

      <DecodingList items={items} />

      <div className='infocard'>
        <div className='cardText'>
          <div className='cardName'>
            <h2><span className='BethEllenPhrase'>Wofür</span> IST DIESE SEITE?</h2>
            <img src={emoji2} alt="" width={50} />
          </div>
          <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo doloresLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores</p>
          <br /><br /><br />

          <div className='cardName'>
            <h2><span className='BethEllenPhrase'>How</span> TO USE?</h2>
            <img src={emoji4} alt="" width={40} />
          </div>
          <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores</p>
        </div>
        <img src={home2} alt="" width={500} />
      </div>

      <br />
      <div className='dorplay'>
        <h2>GO TO <Link to="/dictionary">DICTIONARY</Link></h2>
        <p>or try your luck and</p>
        <h2><Link to="/game">PLAY</Link></h2>
      </div>
      <br />

      <div className='infocard'>
        <div className='cardText'>
          <div className='cardName'>
          <h2><span className='BethEllenPhrase'>Who</span> AM I?</h2>
          <img src={emoji3} alt="" width={50} />
          </div>
          <p>Leidenschaftlicher Frontend-Entwickler mit vielen Ideen. Engagiert für die Schaffung benutzerfreundlicher Web-Erlebnisse. Detailorientiert mit Fokus auf qualitativ hochwertigem Code.
            Leidenschaftlicher Frontend-Entwickler mit vielen Ideen. Engagiert für die Schaffung benutzerfreundlicher Web-Erlebnisse. Detailorientiert mit Fokus auf qualitativ hochwertigem Code.
            <Link to="/about"> Get to know me better.</Link>
          </p>
          <br />
        </div>
        <img src={me} alt="" width={300} style={{borderRadius:50}}/>
      </div>


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
        <a href="https://www.youtube.com/channel/UCuCxer1qR2BBeF99V_n3mKA">
          <FaYoutube size={50} className='icon' />
        </a>
      </footer>
    </div>
  );
}

export default Home;
