import React, {Component} from 'react';
import AudioQuality from './AudioQuality.jsx';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <a href="/" className="header__logo">
          <img src="/img/logo-radio-116.jpg" alt="Logo"/>
        </a>
        <div className="quality-wrapper hidden-mobile">
          <AudioQuality quality={this.props.quality} changeQuality={this.props.changeQuality}/>
        </div>
      </div>
    );
  }
}

export default Header;