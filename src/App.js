import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Link, Router, Route, IndexRoute, browserHistory } from 'react-router'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React Test App</h2>
        </div>
        <ul className="header">
            <li><Link to="/">Home</Link></li>
        </ul>
        <div className="content">
            {this.props.children}
        </div>
     </div>
    );
  }
}

export default App;
