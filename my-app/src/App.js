import React, { Component } from 'react';
import './App.css';
import Displayer from './components/displayer.js';
import Mainlist from './components/mainlist.js';



class App extends Component {
  render() {
    return (
      <div className="App">
            <Displayer />
            <Mainlist data-sections={this} />

      </div>
    );
  }
}

export default App;
