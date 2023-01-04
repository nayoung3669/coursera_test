import React, { useState, createContext, useContext } from 'react';
import './App.css';
import Heading from './components/Heading';

const themeDefault = { border: '10px solid green' };
const themeContext = createContext(themeDefault);

function App() {
  const [word,setWord] = useState('Eat ');
  const theme = useContext(themeContext);
  console.log(theme)

  
  function handleClick() {
    setWord('Stay ');
  }
  
  return (
    <div className="App">
      <Heading message={word + "at Little lemon"} />
      <button onClick={handleClick}>Click me</button>
    </div>

  )
}

export default App;
