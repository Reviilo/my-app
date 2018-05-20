// Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Components
import Header from './global/Header.js';
import Content from './global/Content.js';
import Footer from './global/Footer.js';

// Data
import items from '../data/menu';

class App extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired
  }

  render() {
    const {children} = this.props;
    
    return (
      <div className="App">
        <Header title="The Revi's App" items={items} />
        <Content body={children} />
        {/* <Footer copy="CopyRight &copy; | DevRevi 2018" /> */}
        <Footer />
      </div>
    );
  }
}

export default App;
