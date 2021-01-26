import React, { useEffect, useContext } from 'react';
import Caption from './components/Caption';
import Hang from './components/Hang';
import Wrong from './components/Wrong';
import Word from './components/Word';
import GameOver from './components/GameOver';
import Message from './components/Message';
import HangmanContext from './context/hangmanContext';

function App() {
  const {
    displayWord,
    handleKeyDown,
    getWords,
    correctLetter,
    selectedWord,
    loading,
    message,
    wrongLetters,
    parts,
  } = useContext(HangmanContext);
  useEffect(() => {
    localStorage.clear();
    async function getData() {
      await getWords();
      displayWord();
    }
    getData();
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      getData();
    };

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
      {(correctLetter.length === [...new Set(selectedWord.split(''))].length ||
        wrongLetters.length >= parts) &&
      loading === false ? (
        <GameOver />
      ) : null}
      {message && <Message />}
    </div>
  );
}

export default App;
