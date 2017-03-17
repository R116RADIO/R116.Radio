import React, {Component} from 'react';
import AudioQuality from './AudioQuality.jsx';

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <a href="/" className="header__logo">
          <img src="/img/logo-radio-116.jpg" alt="Logo"/>
        </a>
        <div className="quality-wrapper hidden-mobile">
          <AudioQuality />
        </div>
      </div>
    );
  }
}

export default Header;