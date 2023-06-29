import React, { useState } from 'react';
import '../styles/Game.css';
import { Link } from 'react-router-dom';
import AlphabetData from '../alphabet.json';

function Game() {
  const randomLetter = AlphabetData[Math.floor(Math.random() * AlphabetData.length)];
  const randomPicture = randomLetter.photo;
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [showEndGame, setShowEndGame] = useState(false);

  const randomLetters = AlphabetData
    .filter(letter => letter.letter !== randomLetter.letter)
    .sort(() => 0.5 - Math.random())
    .slice(0, 2);

  randomLetters.push(randomLetter);
  randomLetters.sort(() => 0.5 - Math.random());

  const correctAnswer = randomLetter.letter;

  const handleAnswerSelection = (answer) => {
    if (answer === correctAnswer) {
      setIsCorrect(true);
      setScore(prevScore => prevScore + 1);
    } else {
      setIsCorrect(false);
      setScore(prevScore => prevScore - 1);
    }
    setSelectedAnswer(answer);
    setShowResult(true);

    if (score === 6 || score === -1) {
      setShowEndGame(true);
    }
  };

  const handleContinue = () => {
    setSelectedAnswer(null);
    setShowResult(false);
    setIsCorrect(false);
  };

  let resultMessage = '';
  if (score < 0) {
    resultMessage = 'Try again!';
  } else if (score === 7) {
    resultMessage = 'You win!';
  }

  return (
    <div style={{ backgroundColor: '#3C8AFF', minHeight: '100vh' }} className='gameBody'>
      <Link to='/' className='backLink'>ZURÜCK</Link>
      <h1>Guess the sign!</h1>
      <p>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
        magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
      </p>

      <img src={randomPicture} width={300} className='gesture'/>

      <h3 style={{ color: 'white' }}>What does this look like?</h3>
      {randomLetters.map((letter, index) => (
        <button
          key={index}
          className={`gameButton ${selectedAnswer === letter.letter ? 'selected' : ''}`}
          onClick={() => handleAnswerSelection(letter.letter)}
          disabled={showResult}
        >
          {letter.letter}
        </button>
      ))}

      {showResult && (
        <div className="resultContainer">
          <div className={`resultMessage ${isCorrect ? 'correct' : 'incorrect'}`}>
            {isCorrect ? 'Correct!' : 'Incorrect!'}
          </div>
          <button className="continueButton" onClick={handleContinue}>
            Continue
          </button>
          <br />
          <Link to="/">
            <button className='BackButton'>Back to Homepage</button>
          </Link>
        </div>
      )}

      {showEndGame && (
        <div className="endGameContainer">
          <div className="resultMessage">
            {score === 7 ? 'Congratulations! You won!' : 'Game over! Practice some more!'}
          </div>
          <Link to="/">
            <button className='BackButton'>Back to Homepage</button>
          </Link>
        </div>
      )}
<br /><br />
      <h4 style={{color:'#00308F'}}>Current score: {score}</h4>
    </div>
  );
}

export default Game;
