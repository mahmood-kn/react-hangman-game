import { DISPLAY_WORD } from './types';

const hangmanReducer = (state, action) => {
  switch (action.type) {
    case DISPLAY_WORD:
      return {
        ...state,
        selectedWord: action.payload,
      };

    default:
      return state;
  }
};

export default hangmanReducer;
