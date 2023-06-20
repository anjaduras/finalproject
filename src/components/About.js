import React from 'react';
import { Link } from 'react-router-dom';
import image from '../pictures/blue.png';
import '../styles/About.css';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

function About() {
  return (
    <div className='AboutBody'>

      <header className='AboutHeader'>
        <Link to="/">ZURÜCK</Link>
        <h1>ABOUT ME</h1>


      </header>
      <img src={image} alt="" width={300} className='me' />
      <div className='infocard'>
        <h2>WAS IST USL?</h2>
        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores </p>

      </div>

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
        <img src={image} alt="" width={200} />
        <img src={image} alt="" width={200} />
        <img src={image} alt="" width={200} />

      </div>
      <footer>
        <FaInstagram size={40} className='icon' />
        <FaLinkedin size={40} className='icon' />
        <FaGithub size={40} className='icon' />
      </footer>
    </div>
  );
}

export default About;
