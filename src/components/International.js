import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/International.css';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

function International() {
    return (
        <div className='InterBody'>
            
            <header className='InterHeader'>
            <Link to="/" className='backLink'>ZURÜCK</Link>
                <h1>WANT TO LEARN OTHER SIGN LANGUAGES?</h1>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed di</p>
            </header>
            <div className='quelle'>
                <h2>WAS IST USL?</h2>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores </p>
            </div>

            <div className='quelle'>
                <h2>WOFÜR IST DIESE SEITE?</h2>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores </p>
            </div>

            <div className='quelle'>
                <h2>HOW TO USE?</h2>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores </p>
            </div>

            <div className='quelle'>
                <h2>WHO AM I?</h2>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores </p>
            </div>

            <footer>
                <FaInstagram size={40} className='icon' />
                <FaLinkedin size={40} className='icon' />
                <FaGithub size={40} className='icon' />
            </footer>
        </div>
    );
}

export default International;