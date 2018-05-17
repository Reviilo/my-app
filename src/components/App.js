import React, { Component } from 'react';

// Components
import Header from './global/Header.js';
import Content from './global/Content.js';
import Footer from './global/Footer.js';

// Data
import items from '../data/menu';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title="The Revi's App" items={items} />
        <Content />
        {/* <Footer copy="CopyRight &copy; | DevRevi 2018" /> */}
        <Footer />
      </div>
    );
  }
}

export default App;
