import React, { useState } from 'react';

const Stack = () => {
  const [word, setWord] = useState('');
  const [letters, setLetters] = useState([]);
  const [chngdWrd, setChngdWrd] = useState('');
  const [isPalindrome, setIsPalindrome] = useState(false);

  const pushWordIntoStack = () => {
    const newLetters = [...word];
    setLetters(newLetters);
  };

  const popOffStackInReverseOrder = () => {
    const newLetters = [...letters];
    const newChngdWrd = [];
    while (newLetters.length > 0) {
      newChngdWrd.push(newLetters.pop());
      // to peek out the top element
      // console.log(newChngdWrd[newChngdWrd.length - 1]);
    }
    setChngdWrd(newChngdWrd.join(''));
  };

  const checkIfPalindrome = () => {
    setIsPalindrome(word === chngdWrd);
  };

  return (
    <>
      <div className="stack">
        <input type="text" onChange={(e) => setWord(e.target.value)} />
        <h4>Your word is: {word}</h4>

        {/* Push word into stack */}
        {word.length > 1 && (
          <div>
            <p>Let's push the word into a stack</p>
            <button onClick={pushWordIntoStack}>Push into stack</button>
            {letters.length > 0 && (
              <>
                <p>So, the changed stack will be:</p>
                <p>{JSON.stringify(letters)}</p>
              </>
            )}
          </div>
        )}

        {/* Pop off stack in reverse order */}
        {letters.length > 0 && (
          <div>
            <p>Let's pop off the stack in reverse order</p>
            <button onClick={popOffStackInReverseOrder}>Pop off stack</button>
            {chngdWrd.length > 0 && (
              <>
                <p>So, the changed word will be:</p>
                <p>{chngdWrd}</p>
              </>
            )}
          </div>
        )}

        {/* Check if palindrome */}
        {chngdWrd.length > 0 && (
          <div>
            <p>Let's check if the input word is a palindrome or not</p>
            <button onClick={checkIfPalindrome}>Check for palindrome</button>
            <p>
              You can try word <b>racecar</b> which is a palindrome
            </p>
            {isPalindrome && <p>{word} is a palindrome</p>}
            {!isPalindrome && <p>{word} is not a palindrome</p>}
          </div>
        )}
      </div>
      <style jsx>{`
        .stack {
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
          text-align: center;
        }

        .stack input[type='text'] {
          width: 100%;
          padding: 10px;
          margin-bottom: 20px;
          border: none;
          border-bottom: 1px solid #ccc;
          font-size: 18px;
        }

        .stack h4 {
          margin-bottom: 20px;
          font-size: 20px;
        }

        .stack button {
          background-color: #4caf50;
          color: white;
          padding: 10px 20px;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          margin: 10px;
        }

        .stack button:hover {
          background-color: #3e8e41;
        }

        .stack p {
          font-size: 18px;
          margin-bottom: 10px;
        }

        .stack b {
          font-weight: bold;
        }

        @media (max-width: 600px) {
          .stack input[type='text'] {
            font-size: 16px;
          }

          .stack h4 {
            font-size: 18px;
          }

          .stack p {
            font-size: 16px;
          }
        }
      `}</style>
    </>
  );
};

export default Stack;
