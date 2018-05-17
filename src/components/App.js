import React, { Component } from 'react';

// Components
import Header from './global/Header.js';
import Content from './global/Content.js';
import Footer from './global/Footer.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Content />
        <Footer />
      </div>
    );
  }
}

export default App;
