import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Dictionary.css';
import AlphabetData from '../alphabet.json';
import ColorsData from '../colors.json';

function Dictionary() {
  const [selectedLetter, setSelectedLetter] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);

  const handleLetterClick = (letter) => {
    setSelectedLetter(letter);
    setSelectedColor(null);
  };

  const handleColorClick = (color) => {
    setSelectedColor(color);
    setSelectedLetter(null);
  };

  const handleListClose = () => {
    setSelectedLetter(null);
    setSelectedColor(null);
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
          {ColorsData.map((color) => (
            <li
              key={color.colour}
              onClick={() => handleColorClick(color)}
              className={`DictionaryList ${selectedColor === color ? 'selected' : ''}`}
            >
              {color.colour}
            </li>
          ))}
        </details>
        {selectedColor && (
          <video
            src={selectedColor.sign}
            controls
            loop
            style={{ width: '300px', height: 'auto', borderRadius: '20px' }}
          />
        )}
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
