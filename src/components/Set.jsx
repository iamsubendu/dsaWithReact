import React, { useState } from 'react';

const Set = () => {
  const usernames = new Set();
  const [data, setData] = useState('');

  function addUser(username) {
    if (!username) {
      alert('Please enter a valid username');
      return;
    }
    if (usernames.has(username)) {
      alert(`Username "${username}" already exists`);
    } else {
      usernames.add(username);
      alert(`Username "${username}" added successfully`);
    }
  }

  return (
    <>
      <div className="set">
        <p>Create a username</p>
        <input type="text" onChange={(e) => setData(e.target.value)} />
        <button onClick={() => addUser(data)}>Submit</button>
      </div>
    </>
  );
};

export default Set;
