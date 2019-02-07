import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { eventSearch } from './utils/API.js';

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          
          
          <h1>Coming Soon - User Interface!</h1>
          <h2> {eventSearch()} </h2>
          <p>
            Work-in-progress. Completing back-end functionality first.<br />
            Thank you for visiting!
          </p>

          {/* <button onClick={API.eventSearch}>X</button> */}
          
        </header>
      </div>
    );
  }
}

export default App;
