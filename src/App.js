import React from 'react';
import Caption from './components/Caption';
import Hang from './components/Hang';
import Wrong from './components/Wrong';
import Word from './components/Word';

function App() {
  return (
    <div>
      <Caption />
      <div className='game-container'>
        <Hang />
        <Wrong />
        <Word />
      </div>
    </div>
  );
}

export default App;
