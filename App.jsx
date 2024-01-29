import React, { useState } from 'react';
import './App.css';
import { puppyList } from './data.js';

function App() {
  const [puppies, setPuppies] = useState(puppyList);

  console.log("puppies: ", puppies);

  return (
    <div className="App">
      {puppies.map((puppy) => (
        <p key={puppy.id}>{puppy.name}</p>
      ))}
    </div>
  );
}

export default App;
