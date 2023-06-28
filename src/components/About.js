import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/About.css';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

function About() {
  const image = "images/blue.png"
  const me = "images/me.jpg"
  const about1 = "images/about1.jpg"
  const about2 = "images/about2.jpg"
  const about3 = "images/about3.jpg"
  return (
    <div className='AboutBody'>

      <header className='AboutHeader'>
        <Link to="/" className='backLink'>ZURÜCK</Link>
        <h1>ABOUT ME</h1>
      </header>
      <img src={me} alt="" width={300} className='me' />
      <div className='AboutContent'>
        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores </p>


        <div className='infocard'>
          <h2>WOFÜR IST DIESE SEITE?</h2>
          <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores </p>
        </div>

        <div className='infocard'>
          <h2>HOW TO USE?</h2>
          <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores </p>
        </div>
    
        <h2>THINGS I LIKE:</h2>

        <div className='ThingsILike'>

          <img src={about2} alt="" width={400} />
          <img src={about1} alt="" width={400} />
          <img src={about3} alt="" width={400} />
          {/* <p>baking</p>
          <p>art</p>
          <p>cats</p> */}

        </div>
        <h3>Check out my <Link to="https://www.youtube.com/channel/UCuCxer1qR2BBeF99V_n3mKA">YouTube.</Link></h3>
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
      </footer>
    </div>
  );
}

export default About;
