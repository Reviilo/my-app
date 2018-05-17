// Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Assets
import './css/Footer.css';

class Footer extends Component {
  static propTypes = {
    copy: PropTypes.string
  }
  
  render() {
    const { copy = "CopyRight &copy; | DevRevi 2018" } = this.props;

    return (
      <div className="Footer">

        <p dangerouslySetInnerHTML={{ __html: copy }} />
        
      </div>
    );
  }
}

export default Footer;
