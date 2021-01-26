import React, { useContext } from 'react';
import HangmanContext from '../context/hangmanContext';

const Word = () => {
  const { selectedWord, correctLetter } = useContext(HangmanContext);
  return (
    <div className='word'>
      {selectedWord.split('').map((letter, i) => (
        <span className='letter' key={i}>
          {correctLetter.includes(letter) ? letter : ''}
        </span>
      ))}
    </div>
  );
};

export default Word;
