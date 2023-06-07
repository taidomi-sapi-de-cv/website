import React from 'react';
import Button from '@mui/material/Button';

import logo from '../logo.svg';
import './App.css';

import {Counter} from './Counter';
import {Ping} from './Ping';

console.log('Trae', process.env)

function App() {
  return (
    <div className="App">
      <Counter />
      <Ping />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Ping />
          <Button variant="contained">Hola</Button>
        <p>
          Edit <code>src/App.tsx</code> and save to reload. MAS2
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
