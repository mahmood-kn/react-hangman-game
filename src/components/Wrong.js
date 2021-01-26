import React, { useContext } from 'react';
import HangmanContext from '../context/hangmanContext';

const Wrong = () => {
  const { wrongLetters } = useContext(HangmanContext);
  return (
    <div className='wrong-container'>
      {wrongLetters.length > 0 ? <p>Wrong Letters</p> : ''}
      {wrongLetters.length > 0
        ? wrongLetters.map((letter, i) => (
            <span className='wrong-letter' key={i}>
              {`${letter},`}
            </span>
          ))
        : ''}
    </div>
  );
};

export default Wrong;
