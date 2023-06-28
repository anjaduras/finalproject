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

  const handleListClose = () => {
    setSelectedLetter(null);
  };

  return (
    <div className='DictionaryBody'>
      <Link to="/" className='backLink'>ZURÜCK</Link>
      <h1>USL DICTIONARY</h1>
      <p>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
      </p>
      <div className='learnArea'>
        <h3>LEARN:</h3>
        <br />
        <details onToggle={handleListClose}>
          <summary>ALPHABET</summary>
          {AlphabetData.map((letter) => (
            <li
              key={letter.letter}
              onClick={() => handleLetterClick(letter)}
              className={`DictionaryList ${selectedLetter === letter ? 'selected' : ''}`}
            >
              {letter.letter}
            </li>
          ))}
        </details>
        {selectedLetter && (
          <img
            src={selectedLetter.photo}
            alt={selectedLetter.letter}
            style={{ width: '300px', height: '400px', borderRadius: '20px' }}
          />
        )}
        <br />
        <details>
          <summary>COLOURS</summary>
          <li className='red'>RED</li>
          <li className='orange'>ORANGE</li>
          <li className='yellow'>YELLOW</li>
          <li className='green'>GREEN</li>
          <li className='blue'>BLUE</li>
          <li className='purple'>PURPLE</li>
          <li className='black'>BLACK</li>
          <li className='white'>WHITE</li>
          <li className='pink'>PINK</li>
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
