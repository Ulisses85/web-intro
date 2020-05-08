import React from 'react';
import {brand_logo} from './logo.svg';
import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={brand_logo} className="App-logo" alt="logo" />
        <p>
            Welcome to my website Lukasz K.
        </p>
      </header>
    </div>
  );
}

export default App;
