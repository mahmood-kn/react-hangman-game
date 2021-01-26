import React, { useContext } from 'react';
import HangmanContext from '../context/hangmanContext';
const Hang = () => {
  const { worngLetters, parts } = useContext(HangmanContext);
  console.log(parts);

  // if (worngLetters.length < parts.length) {
  //   let count = worngLetters.length - 1;
  //   parts[count].classList.add('show-part');
  // }
  return (
    <svg height='250' width='200' className='figure-container'>
      <line x1='60' y1='20' x2='140' y2='20'></line>
      <line x1='140' y1='20' x2='140' y2='50'></line>
      <line x1='60' y1='20' x2='60' y2='230'></line>
      <line x1='20' y1='230' x2='100' y2='230'></line>
      {/* {parts.map((part, i) => part)} */}
    </svg>
  );
};

export default Hang;
