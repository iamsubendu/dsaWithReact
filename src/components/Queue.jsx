import React, { useState } from 'react';

const Queue = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  const addMessage = () => {
    if (newMessage.trim() === '') return;
    setMessages([...messages, newMessage]);
    setNewMessage('');
  };

  const removeOldestMessage = () => {
    if (messages.length > 0) {
      //  [, ...newMessages] is a destructuring assignment that
      // extracts all elements of the messages array except for
      // the first element(i.e., the oldest message) and assigns
      // them to the newMessages array.
      const [, ...newMessages] = messages;
      setMessages(newMessages);
    }
  };

  return (
    <>
      <div className="message-queue">
        <h1>Message Queue</h1>
        <div>
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
          />
          <button onClick={() => addMessage()}>Add Message</button>
        </div>
        <button onClick={() => removeOldestMessage()}>
          Remove Oldest Message
        </button>
        <ul>
          {messages.map((message, index) => (
            <li key={index}>{message}</li>
          ))}
        </ul>
      </div>
      <style jsx>{`
        .message-queue {
          max-width: 500px;
          margin: 0 auto;
          padding: 20px;
          font-size: 16px;
        }

        @media only screen and (max-width: 768px) {
          .message-queue {
            font-size: 14px;
          }
        }

        @media only screen and (max-width: 576px) {
          .message-queue {
            font-size: 12px;
          }
        }
      `}</style>
    </>
  );
};

export default Queue;
