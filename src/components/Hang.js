import React, { useContext, useState, useEffect } from 'react';
import HangmanContext from '../context/hangmanContext';
const Hang = () => {
  const { hangIndex } = useContext(HangmanContext);
  const [class1, setClass1] = useState(false);
  const [class2, setClass2] = useState(false);
  const [class3, setClass3] = useState(false);
  const [class4, setClass4] = useState(false);
  const [class5, setClass5] = useState(false);
  const [class6, setClass6] = useState(false);
  useEffect(() => {
    switch (hangIndex) {
      case 1:
        setClass1(true);
        break;
      case 2:
        setClass2(true);
        break;
      case 3:
        setClass3(true);
        break;
      case 4:
        setClass4(true);
        break;
      case 5:
        setClass5(true);
        break;
      case 6:
        setClass6(true);
        break;

      default:
        break;
    }
  }, [hangIndex]);

  return (
    <svg height='250' width='200' className='figure-container'>
      <line x1='60' y1='20' x2='140' y2='20'></line>
      <line x1='140' y1='20' x2='140' y2='50'></line>
      <line x1='60' y1='20' x2='60' y2='230'></line>
      <line x1='20' y1='230' x2='100' y2='230'></line>

      {/* man  */}
      {/* head  */}
      <circle
        cx='140'
        cy='70'
        r='20'
        className={class1 ? 'figure-part show-part' : 'figure-part'}></circle>
      {/* body  */}
      <line
        className={class2 ? 'figure-part show-part' : 'figure-part'}
        x1='140'
        y1='90'
        x2='140'
        y2='150'></line>
      {/* left hand  */}
      <line
        className={class3 ? 'figure-part show-part' : 'figure-part'}
        x1='140'
        y1='120'
        x2='110'
        y2='100'></line>
      {/* right hand  */}
      <line
        className={class4 ? 'figure-part show-part' : 'figure-part'}
        x1='140'
        y1='120'
        x2='170'
        y2='100'></line>
      {/* left foot  */}
      <line
        className={class5 ? 'figure-part show-part' : 'figure-part'}
        x1='140'
        y1='150'
        x2='110'
        y2='180'></line>
      {/* right foot  */}
      <line
        className={class6 ? 'figure-part show-part' : 'figure-part'}
        x1='140'
        y1='150'
        x2='170'
        y2='180'></line>
    </svg>
  );
};

export default Hang;
