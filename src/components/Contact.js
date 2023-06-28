import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Contact.css';

function Contact() {

    return (
        <div className='ContactBody'>
            <Link to="/" className='backLink'>ZURÜCK</Link>
            <div className='ContactCard'>
                <h1>CONTACT ME HERE:</h1>
                <br />
                <p>Email: <a href='mailto:anna@duras.org' className='SocialLink'> anna@duras.org</a></p>
                <p>Linkedin: <Link to="https://www.linkedin.com/in/annaduras/" className='SocialLink'> linkedin.com/in/annaduras/</Link> </p>
                <p>GitHub: <Link to="https://github.com/anjaduras" className='SocialLink'> github.com/anjaduras</Link> </p>
                <p>Instagram: <Link to="https://www.instagram.com/tashoklasna/" className='SocialLink'> instagram.com/tashoklasna/</Link> </p>
            </div>
        </div>
    );

}

export default Contact;