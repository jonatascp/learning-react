import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './component/Hello';
import Forum from './component/Forum';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Hello name="Jonh"/>
        <Forum title="Learning react" description="Create project for study react" />
        <Forum title="React is easy" description="Learning react is easy and simple" />
      </div>
    );
  }
}

export default App;
