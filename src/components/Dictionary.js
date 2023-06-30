import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Dictionary.css';
import AlphabetData from '../alphabet.json';
import ColorsData from '../colors.json';
import GreetingData from '../greetings.json';

function Dictionary() {
  const [selectedLetter, setSelectedLetter] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedGreeting, setSelectedGreeting] = useState(null);

  const handleLetterClick = (letter) => {
    setSelectedLetter(letter);
    setSelectedColor(null);
    setSelectedGreeting(null);
  };

  const handleColorClick = (color) => {
    if (selectedColor === color) {
      setSelectedColor(null);
    } else {
      setSelectedColor(color);
      setSelectedLetter(null);
      setSelectedGreeting(null);
    }
  };

  const handleGreetingClick = (greeting) => {
    setSelectedGreeting(greeting);
    setSelectedLetter(null);
    setSelectedColor(null);
  };

  const handleListClose = () => {
    setSelectedLetter(null);
    setSelectedColor(null);
    setSelectedGreeting(null);
  };

  return (
    <div className='DictionaryBody'  style={{ backgroundColor: '#3C8AFF', minHeight: '100vh' }}>
      <Link to="/" className='backLink'>ZURÜCK</Link>
      <h1>UGS WÖRTERBUCH</h1>
      <p>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
      </p>
      <div className='learnArea'>
        <h3>LERNEN:</h3>
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
        <details onToggle={handleListClose}>
          <summary>FARBEN</summary>
          {ColorsData.map((color) => (
            <li
              key={color.colour}
              onClick={() => handleColorClick(color)}
              className={`DictionaryList ${selectedColor === color ? 'selected' : ''}`}
              style={{
                backgroundColor: color.colour === 'pink' ? '#FF007F' : color.colour,
                color: color.colour === 'black' ? 'white' : 'black',
              }}
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
        <details onToggle={handleListClose}>
          <summary>GRÜẞE</summary>
          {GreetingData.map((greeting) => (
            <li
              key={greeting.greeting}
              onClick={() => handleGreetingClick(greeting)}
              className={`DictionaryList ${selectedGreeting === greeting ? 'selected' : ''}`}
            >
              {greeting.greeting}
            </li>
          ))}
        </details>
        {selectedGreeting && (
          <video
            src={selectedGreeting.sign}
            controls
            loop
            style={{ width: '300px', height: 'auto', borderRadius: '20px' }}
          />
        )}
      </div>
    </div>
  );
}

export default Dictionary;
