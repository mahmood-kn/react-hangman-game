import React, { useReducer } from 'react';
import HangmanContext from './hangmanContext';
import HangmanReducer from './hangmanReducer';
import {
  DISPLAY_WORD,
  SET_LOADING,
  SHOW_MESSAGE,
  HIDE_MESSAGE,
  CORRECT_LETTER,
  WRONG_LETTERS,
  HANG,
} from './types';

const HangmanState = ({ children }) => {
  const initialState = {
    selectedWord: '',
    correctLetter: [],
    wrongLetters: [],
    loading: true,
    message: ['message-container'],
    parts: 6,
    hangIndex: 0,
  };
  const [state, dispatch] = useReducer(HangmanReducer, initialState);

  const getWords = async () => {
    const res = await fetch(
      'https://random-word-api.herokuapp.com/word?number=1'
    );
    const word = await res.json();
    let newWord;
    if (localStorage.getItem('newWord') === null) {
      newWord = [];
      newWord.push(word[0]);
    } else {
      newWord = JSON.parse(localStorage.getItem('newWord'));
      newWord.push(word[0]);
    }
    localStorage.setItem('newWord', JSON.stringify(newWord));
    dispatch({ type: SET_LOADING });
    console.log(newWord);
  };

  const displayWord = async () => {
    const word = JSON.parse(localStorage.getItem('newWord'));
    const selectedWord = word ? word[0] : '';
    dispatch({ type: DISPLAY_WORD, payload: selectedWord });
  };

  const checkLetter = (key) => {
    const word = JSON.parse(localStorage.getItem('newWord'));

    if (word[0].split('').includes(key)) {
      if (!state.correctLetter.includes(key)) {
        dispatch({ type: CORRECT_LETTER, payload: key });
        console.log('correct');
      } else {
        showMessage();
      }
    } else {
      if (!state.wrongLetters.includes(key)) {
        dispatch({ type: WRONG_LETTERS, payload: key });

        dispatch({ type: HANG });
      } else {
        showMessage();
      }
    }
  };

  const handleKeyDown = (e) => {
    if (e.keyCode >= 65 && e.keyCode <= 90) {
      checkLetter(e.key);
    }
  };
  const showMessage = () => {
    dispatch({ type: SHOW_MESSAGE });
    setTimeout(() => {
      hideMessage();
    }, 2000);
  };
  const hideMessage = () => {
    dispatch({ type: HIDE_MESSAGE });
  };

  return (
    <HangmanContext.Provider
      value={{
        selectedWord: state.selectedWord,
        correctLetter: state.correctLetter,
        wrongLetters: state.wrongLetters,
        loading: state.loading,
        message: state.message,
        parts: state.parts,
        hangIndex: state.hangIndex,
        getWords,
        displayWord,
        handleKeyDown,
        hideMessage,
      }}>
      {children}
    </HangmanContext.Provider>
  );
};

export default HangmanState;
