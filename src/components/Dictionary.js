import React from 'react';
import { Link } from 'react-router-dom';
import image from '../pictures/blue.png';
import '../styles/Dictionary.css';

function Dictionary() {
    return (
        <div className='DictionaryBody'>
            <Link to="/">ZURÜCK</Link>
            <h1>USL DICTIONARY</h1>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores</p>
            <h3>LEARN:</h3>
            <details>
                <summary>ALPHABET</summary>
                <li>А</li>
                <li>Б</li>
                <li>В</li>
                <li>Г</li>
                <li>Ґ</li>
                <li>Д</li>
                <li>Е</li>
                <li>Є</li>
                <li>Ж</li>
                <li>З</li>
                <li>И</li>
                <li>І</li>
                <li>Ї</li>
                <li>Й</li>
                <li>К</li>
                <li>Л</li>
                <li>М</li>
                <li>Н</li>
                <li>О</li>
                <li>П</li>
                <li>Р</li>
                <li>С</li>
                <li>Т</li>
                <li>У</li>
                <li>Ф</li>
                <li>Х</li>
                <li>Ц</li>
                <li>Ч</li>
                <li>Ш</li>
                <li>Щ</li>
                <li>Ь</li>
                <li>Ю</li>
                <li>Я</li>
            </details>
            <br />
            <details>
                <summary>COLOURS</summary>
                <li>RED</li>
                <li>ORANGE</li>
                <li>YELLOW</li>
                <li>GREEN</li>
                <li>BLUE</li>
                <li>PURPLE</li>
                <li>BLACK</li>
                <li>WHITE</li>
                <li>PINK</li>
            </details>
            <br />
            <details>
                <summary>GREETING</summary>
                <li>Good morning!</li>
                <li>Good evening!</li>
                <li>Good night!</li>
                <li>Hi! (Formal)</li>
                <li>Hi! (Informal)</li>
                <li>See you!</li>
                <li>Alles Gute!</li>
            </details>

            <img src={image} alt="" width={200} />
        </div>
    );
}

export default Dictionary;
