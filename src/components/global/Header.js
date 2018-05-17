import React, { Component } from 'react';
import logo from './images/logo.svg';
import './css/Header.css';

class Header extends Component {
  render() {
    return (
      <div className="Header">

        <header className="Logo">
          <img src={logo} alt="logo" />
          <h2 className="App-title">The Revi's App</h2>
        </header>
        
      </div>
    );
  }
}

export default Header;
