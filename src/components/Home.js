import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Welcome to the Home Page!</h1>
      <p>This is the homepage content.</p>
        <h3>
          <Link to="/njuracourse">Njura Course</Link>
        </h3>
        <h3>
          <Link to="/dictionary">Dictionary</Link>
        </h3>
        <h3>
          <Link to="/game">Game</Link>
        </h3>
    </div>
  );
}

export default Home;
