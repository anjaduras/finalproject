import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Dictionary.css';
import AlphabetData from '../alphabet.json';
import { useState } from 'react';

function Dictionary() {
    const [selectedLetter, setSelectedLetter] = useState(null);

    const handleLetterClick = (letter) => {
      setSelectedLetter(letter);
    };
    return (
        <div className='DictionaryBody'>
        <Link to="/" className='backLink'>ZURÜCK</Link>
        <h1>USL DICTIONARY</h1>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
          eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
          voluptua. At vero eos et accusam et justo duo dolores
        </p>
        <div className='learnArea'>
          <h3>LEARN:</h3>
          <br />
          <details>
            <summary>ALPHABET</summary>
            {AlphabetData.map((letter) => (
              <li key={letter.id} onClick={() => handleLetterClick(letter)}>
                {letter.letter} 
              </li>
            ))}
          </details>
        {selectedLetter && (
          <img src={selectedLetter.photo}
           alt={selectedLetter.letter} 
           style={{ width: '200px', height: '200px' }}/>
        )}
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
            </div>
        </div>
    );
}

export default Dictionary;
