import React, { useEffect, useContext } from 'react';
import Caption from './components/Caption';
import Hang from './components/Hang';
import Wrong from './components/Wrong';
import Word from './components/Word';
import HangmanContext from './context/hangmanContext';

function App() {
  const { displayWord } = useContext(HangmanContext);
  useEffect(() => {
    localStorage.clear();
    displayWord();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
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
