import logo from './logo.svg';
import './App.css';
import Btn from './components/Btn';
import Heading from './components/Heading';

import React, { useState } from 'react';



function App() {
  const [word,setWord] = useState('Eat ');

  return (
    <div className="App">
      <Heading message={word + "at Little lemon"} />
    </div>

  )
}

export default App;
