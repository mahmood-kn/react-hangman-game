import React, { useContext } from 'react';
import HangmanContext from '../context/hangmanContext';

const GameOver = () => {
  const { correctLetter, selectedWord, wrongLetters, parts } = useContext(
    HangmanContext
  );
  return (
    <div className='gameover-container'>
      <div className='gameover'>
        <h2 className='gameover-msg'>
          {correctLetter.length ===
            [...new Set(selectedWord.split(''))].length &&
            'Game Over , You win 😃'}
          {wrongLetters.length >= parts && 'Game Over , You lose 😕'}
        </h2>
        <button
          className='gameover-btn'
          onClick={() => window.location.reload(false)}>
          Play Again
        </button>
      </div>
    </div>
  );
};

export default GameOver;
