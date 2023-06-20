import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NjuraCourse.css';

function NjuraCourse() {
    return (
        <div className='CourseBody'>
            
            <header className='CourseHeader'>
            <Link to="/">ZURÜCK</Link>
                <h1>NJURA POKAZHE</h1>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores</p>
                <input type="text" />
            </header>
            <p>down here the videos will be displayed.</p>
        </div>
    );
}

export default NjuraCourse;
