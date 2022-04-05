import React from 'react';
import { Routes, Route } from "react-router-dom";

import logo from './logo.svg';
import './App.css';
function App() {
  return (
    <Routes>
      <Route path="/" element={<div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>} />
      <Route path="about" element={<h1>About Us</h1>} />
    </Routes>
  );
}

export default App;
