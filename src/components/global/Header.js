// Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// Assets
import logo from './images/logo.svg';
import './css/Header.css';

class Header extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    items: PropTypes.array.isRequired
  }

  render() {

    const { title, items } = this.props;

    return (
      <div className="Header">

        <header className="Logo">
          <img src={logo} alt="logo" />
          <h2 className="App-title">{title}</h2>
        </header>

        
        <ul className="menu">
          {
            items && items.map(
              (item, i) => <li key={i}><Link to={item.url}>{item.title}</Link></li> 
            )
          }
        </ul>
        
        
      </div>
    );
  }
}

export default Header;
