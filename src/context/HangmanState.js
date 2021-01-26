import React, { useReducer } from 'react';
import HangmanContext from './hangmanContext';
import HangmanReducer from './hangmanReducer';
import { DISPLAY_WORD } from './types';

const HangmanState = ({ children }) => {
  const initialState = {
    selectedWord: '',
  };

  const getWords = async () => {
    const res = await fetch(
      'https://random-word-api.herokuapp.com/word?number=1'
    );
    const word = await res.json();
    console.log(word[0]);
    let newWord;
    if (localStorage.getItem('newWord') === null) {
      newWord = [];
      newWord.push(word[0]);
    } else {
      newWord = JSON.parse(localStorage.getItem('newWord'));
      newWord.push(word[0]);
    }
    localStorage.setItem('newWord', JSON.stringify(newWord));

    console.log(newWord);
    // dispatch({ type: GET_WORDS });
  };

  const displayWord = async () => {
    await getWords();
    const word = JSON.parse(localStorage.getItem('newWord'));
    const selectedWord = word ? word[0] : '';
    dispatch({ type: DISPLAY_WORD, payload: selectedWord });
  };

  const [state, dispatch] = useReducer(HangmanReducer, initialState);
  return (
    <HangmanContext.Provider
      value={{
        selectedWord: state.selectedWord,
        getWords,
        displayWord,
      }}>
      {children}
    </HangmanContext.Provider>
  );
};

export default HangmanState;
