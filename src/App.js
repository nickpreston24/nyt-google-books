import React, { Component } from 'react';
import './App.css';
import Search from './components/pages/BookSearch';
import Saved from './components/pages/SavedBooks';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Google Books Search</h1>
        <h2>Save books for later!</h2>
        <Search/>
        <Saved/>
      </div>
    );
  }
}

export default App;
