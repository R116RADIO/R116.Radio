import React, {Component} from 'react';
import AudioGenre from './AudioGenre.jsx';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <a href="/" className="header__logo">
          <img src="/img/logo-radio-116.jpg" alt="Logo"/>
        </a>
        <div className="quality-wrapper hidden-mobile">
          <AudioGenre genre={this.props.genre} changeGenre={this.props.changeGenre}/>
        </div>
      </div>
    );
  }
}

export default Header;