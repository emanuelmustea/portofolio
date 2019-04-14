import React, { Component } from 'react';
import './App.css';
import Header from "./Header/Header"
import Homepage from "./Homepage/Homepage"
class App extends Component {
  render() {
    return (
      <div className="App flex column">
       <Header />
       <Homepage />
      </div>
    );
  }
}

export default App;
