import React from 'react';

const Hang = () => {
  return (
    <svg height='250' width='200' className='figure-container'>
      <line x1='60' y1='20' x2='140' y2='20'></line>
      <line x1='140' y1='20' x2='140' y2='50'></line>
      <line x1='60' y1='20' x2='60' y2='230'></line>
      <line x1='20' y1='230' x2='100' y2='230'></line>

      {/* man  */}
      {/* head  */}
      <circle cx='140' cy='70' r='20' className='figure-part'></circle>
      {/* body  */}
      <line className='figure-part' x1='140' y1='90' x2='140' y2='150'></line>
      {/* left hand  */}
      <line className='figure-part' x1='140' y1='120' x2='110' y2='100'></line>
      {/* right hand  */}
      <line className='figure-part' x1='140' y1='120' x2='170' y2='100'></line>
      {/* left foot  */}
      <line className='figure-part' x1='140' y1='150' x2='110' y2='180'></line>
      {/* right foot  */}
      <line className='figure-part' x1='140' y1='150' x2='170' y2='180'></line>
    </svg>
  );
};

export default Hang;
