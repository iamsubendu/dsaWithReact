import React, { useState } from 'react';

const Array = () => {
  const [items, setItems] = useState(['apple', 'banana', 'cherry']);

  const addItem = (newItem) => {
    setItems([...items, newItem]);
  };

  const removeLastItem = () => {
    const newItems = [...items];
    newItems.pop();
    setItems(newItems);
  };

  const removeFirstItem = () => {
    const newItems = [...items];
    newItems.shift();
    // The shift() method is then
    // used to remove the first item from the new array
    // newItems.splice(0, 1);
    // splice also could be used
    setItems(newItems);
  };

  const replaceItem = (index, newItem) => {
    const newItems = [...items];
    // replacing second item
    newItems.splice(index, 1, newItem);
    setItems(newItems);
  };

  const removeItem = (index) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  };

  const fruitsToShow = items.slice(0, 2);

  return (
    <>
      <div>
        <h1>My Favorite Fruits</h1>
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <button onClick={() => addItem('grape')}>Add Grape</button>
        <button onClick={() => removeLastItem()}>Remove Last Fruit</button>
        <button onClick={() => removeFirstItem()}>Remove First Fruit</button>
        <button onClick={() => replaceItem(1, 'orange')}>
          Replace Second Fruit
        </button>
        <button onClick={() => removeItem(2)}>Remove Cherry</button>
        <h2>Only Showing First Two Fruits:</h2>
        <ul>
          {fruitsToShow.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      <style jsx>
        {`
          /* Responsive layout for small screens */
          @media screen and (max-width: 600px) {
            body {
              font-size: 14px;
            }

            h1 {
              font-size: 24px;
            }

            h2 {
              font-size: 20px;
            }

            ul {
              margin-left: 20px;
            }
          }

          /* Main styles */
          body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
          }

          h1 {
            font-size: 36px;
            text-align: center;
            margin: 20px 0;
          }

          h2 {
            font-size: 28px;
            margin-top: 40px;
          }

          ul {
            list-style: none;
            margin: 0;
            padding: 0;
          }

          li {
            font-size: 20px;
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 5px;
            margin-bottom: 10px;
            display: flex;
            justify-content: space-between;
            align-items: center;
          }

          li:last-child {
            margin-bottom: 0;
          }

          li button {
            margin-left: 10px;
            padding: 5px 10px;
            background-color: #4caf50;
            color: #fff;
            border: none;
            border-radius: 5px;
            cursor: pointer;
          }

          li button:hover {
            background-color: #3e8e41;
          }

          button {
            margin: 10px;
            padding: 10px 20px;
            background-color: #4caf50;
            color: #fff;
            border: none;
            border-radius: 5px;
            cursor: pointer;
          }

          button:hover {
            background-color: #3e8e41;
          }
        `}
      </style>
    </>
  );
};

export default Array;
