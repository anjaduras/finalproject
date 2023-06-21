import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Game.css';
import AlphabetData from '../alphabet.json';

function Game() {
  const randomIndex = Math.floor(Math.random() * AlphabetData.length);
  const randomPicture = AlphabetData[randomIndex].photo;
  return (
    <div className='gameBody'>
      <Link to="/" className='backLink'>ZURÜCK</Link>
      <h1>GUESS THE SIGN!</h1>
      <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores</p>
      <br /> <br /> <br /> <br />
      <img src={randomPicture} alt="Random Letter" className='gesture' />
      <br /> <br /> <br />
      <h3>What does this look like?</h3>
      <button className='gameButton'>Р</button>
      <button className='gameButton'>С</button>
      <button className='gameButton'>Н</button>
      <br /> <br /> <br /> <br /> <br /> <br />
      <p>heart emoji</p>
      <p>heart emoji</p>
      <p>heart emoji</p>
    </div>
  );
}

export default Game;
