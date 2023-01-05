import React from 'react';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import ReactPlayer from 'react-player';

import Homepage from './components/Homepage';
import AboutMe from './components/AboutMe';


function App() {

  const vidUrl="";
  return (
    <div className='App'>
      <ReactPlayer 
        url={vidUrl}
        playing={false}
        volume={0.5}
      />
      <nav className='nav'>
        <Link to="/" className="nav-item">Homepage</Link>
        <Link to="/about-me" className="nav-item">About me</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about-me" element={<AboutMe />} />
      </Routes>
      
    </div>
  );
}
export default App;
