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
  const items = ['230 K MENSCHEN', '100 JAHRE ALT', '90 DIALEKTE'];
  
  return (

    <div>
      <header className='radial-gradient ' style={{ background: `radial-gradient(at ${mouseXpercentage}% ${mouseYpercentage}%, #FFD600, #3C8AFF)` }}>
        <div className='HeaderContent'>
        <div className='navbar'>
          <Link to="/njuracourse" className='backLink'>NJURA KURS</Link>
          <Link to="/international" className='backLink'>INTERNATIONAL</Link>
          <Link to="/about" className='backLink'>ÜBER MICH</Link>
          <Link to="/contact" className='backLink'>KONTAKT</Link>
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
          <p>Diese Website soll Ressourcen zum Erlernen der ukrainischen Gebärdensprachen bereitstellen.  Es bietet eine Sammlung von Ressourcen und Tools, die Einzelpersonen beim Erlernen und Verstehen dieser Gebärdensprachen unterstützen.  Die Website empfiehlt verschiedene Plattformen und Organisationen, auf denen Benutzer auf interaktive Gebärdensprachvideos zugreifen, nach Phrasen und Vokabeln suchen und immersive Lernerfahrungen erkunden können.  Es schlägt auch Orte wie das Dialoghaus Hamburg vor, an denen Besucher in die Welt der Gehörlosengemeinschaft eintauchen und ein tieferes Verständnis für ihre täglichen Erfahrungen gewinnen können.  Darüber hinaus bietet die Website Informationen zu Online-Kursen, Lernpaketen und Einführungsmaterialien für Personen, die an der Kommunikation mit der Gehörlosengemeinschaft oder dem Erlernen der Gebärdensprache interessiert sind.  Insgesamt zielt die Website darauf ab, eine effektive Kommunikation, Empathie und Inklusivität mit der Gehörlosengemeinschaft zu fördern, indem sie wertvolle Ressourcen zum Erlernen von Gebärdensprachen bereitstellt.</p>
          <br /><br /><br />

          <div className='cardName'>
            <h2><span className='BethEllenPhrase'>Wie</span> BUNUTZT MAN?</h2>
            <img src={emoji4} alt="" width={40} />
          </div>
          <p>Hab einfach Spaß!  Sie können mithilfe des Wörterbuchs neue Gebärden erkunden, auf der Seite „International“ nach Kursen suchen oder einfach mit mir auf den Plattformen abhängen, die ich in den Kontakten bereitgestellt habe.</p>
        </div>
        <img src={home2} alt="" width={500} />
      </div>

      <br />
      <div className='dorplay'>
        <h2>GEH ZUM <Link to="/dictionary" style={{color:'black'}}>WÖRTERBUCH</Link></h2>
        <p>oder versuch dein Glück und</p>
        <h2><Link to="/game" className='ALink'>SPIEL</Link></h2>
      </div>
      <br />

      <div className='infocardMe'>
        <div className='cardText'>
          <div className='cardName'>
          <h2><span className='BethEllenPhrase'>Who</span> AM I?</h2>
          <img src={emoji3} alt="" width={50} />
          </div>
          <p>Leidenschaftlicher Frontend-Entwickler mit vielen Ideen. Engagiert für die Schaffung benutzerfreundlicher Web-Erlebnisse. Detailorientiert mit Fokus auf qualitativ hochwertigem Code.
          </p>
          <br /><br />
          <Link to="/about">  <h3 style={{color:'#FFD600'}}> Get to know me better.</h3></Link>
         
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
