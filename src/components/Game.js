import React from 'react';
import { Link } from 'react-router-dom';
import image from '../pictures/blue.png';
import '../styles/Game.css';

function Game() {
  return (
    <div className='gameBody'>
      <Link to="/">ZURÜCK</Link>
      <h1>GUESS THE SIGN!</h1>
      <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores</p>
      <br /> <br /> <br /> <br />
      <img src={image} alt="" width={200} />
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
