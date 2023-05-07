import React, { useState } from 'react';

const Map = () => {
  const [data, setData] = useState(new Map());

  // Add an item to the Map
  const addItem = (key, value) => {
    setData(new Map(data.set(key, value)));
  };

  // Remove an item from the Map
  const removeItem = (key) => {
    data.delete(key);
    setData(new Map(data));
  };

  // Check if an item exists in the Map
  const hasItem = (key) => {
    return data.has(key);
  };

  return (
    <div>
      <button onClick={() => addItem('exampleKey', 'exampleValue')}>
        Add Item
      </button>
      <button onClick={() => removeItem('exampleKey')}>Remove Item</button>
      <p>
        Does 'exampleKey' exist in the Map?{' '}
        {hasItem('exampleKey') ? 'Yes' : 'No'}
      </p>
    </div>
  );
};

export default Map;
