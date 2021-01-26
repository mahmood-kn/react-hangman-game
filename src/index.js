import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import HangmanState from './context/HangmanState';

ReactDOM.render(
  <React.StrictMode>
    <HangmanState>
      <App />
    </HangmanState>
  </React.StrictMode>,
  document.getElementById('root')
);
