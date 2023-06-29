import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/About.css';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

function About() {
  const image = "images/blue.png";
  const me = "images/me.jpg";
  const about1 = "images/about1.jpg";
  const about2 = "images/about2.jpg";
  const about3 = "images/about3.jpg";
  return (
    <div className='AboutBody'>
      <header className='AboutHeader'>
        <Link to="/" className='backLink'>ZURÜCK</Link>
        <h1>ABOUT ME</h1>
      </header>
      <img src={me} alt="" width={300} className='me' />
      <div className='AboutContent'>
        <h4 className='BethEllenPhrase'>“The elevator to success is out of order. You’ll have to use the stairs, one step at a time.” — Joe Girard</h4>
        <p className='essay'>
          Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.

          Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis.

          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
        </p>

        <h2>THINGS I LIKE:</h2>
<br />
        <div className='ThingsILike'>
          <div>
            <img src={about2} alt="" width={400} height={500}/>
            <h3 className='BethEllenPhrase'>baking</h3>
          </div>
          <div>
            <img src={about1} alt="" width={400} height={500}/>
            <h3 className='BethEllenPhrase'>art</h3>
          </div>
          <div>
            <img src={about3} alt="" width={400} height={500} />
            <h3 className='BethEllenPhrase'>cats</h3>
          </div>
        </div>
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
