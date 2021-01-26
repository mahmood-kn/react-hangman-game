import React, { useContext } from 'react';
import HangmanContext from '../context/hangmanContext';

const Message = () => {
  const { message } = useContext(HangmanContext);

  return (
    <div className={message.join(' ')}>
      <p>You have used this letter before</p>
    </div>
  );
};

export default Message;
