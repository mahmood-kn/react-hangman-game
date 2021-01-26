import {
  DISPLAY_WORD,
  SET_LOADING,
  SHOW_MESSAGE,
  HIDE_MESSAGE,
  CORRECT_LETTER,
  WRONG_LETTERS,
  HANG,
} from './types';

const hangmanReducer = (state, action) => {
  switch (action.type) {
    case DISPLAY_WORD:
      return {
        ...state,
        selectedWord: action.payload,
      };
    case CORRECT_LETTER:
      state.correctLetter.push(action.payload);
      return {
        ...state,
        correctLetter: [...new Set(state.correctLetter)],
      };
    case WRONG_LETTERS:
      state.wrongLetters.push(action.payload);
      return {
        ...state,
        wrongLetters: [...new Set(state.wrongLetters)],
      };
    case SET_LOADING:
      return {
        ...state,
        loading: false,
      };
    case SHOW_MESSAGE:
      state.message.push('show');
      return {
        ...state,
        message: state.message,
      };
    case HIDE_MESSAGE:
      state.message.splice(state.message.length - 1, 1);
      return {
        ...state,
        message: state.message,
      };
    case HANG:
      return {
        ...state,
        hangIndex: state.hangIndex + 1,
      };
    default:
      return state;
  }
};

export default hangmanReducer;
