import React from 'react';

const GameOver = () => {
  return (
    <div className='gameover-container'>
      <div className='gameover'>
        <h2 className='gameover-msg'></h2>
        <button className='gameover-btn'>Play Again</button>
      </div>
    </div>
  );
};

export default GameOver;
