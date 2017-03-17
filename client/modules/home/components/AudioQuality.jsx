import React, { Component } from 'react';

class AudioQuality extends Component {
  render() {
    return (
      <div className="quality">
        <div className="quality__box">
          <p>Choose your audio quality:</p>
          <ul>
            <li className="quality__box__item quality__box__item--active">
              <strong>32</strong>
              <span>Kbps</span>
            </li>
            <li className="quality__box__item">
              <strong>64</strong>
              <span>Kbps</span>
            </li>
            <li className="quality__box__item">
              <strong>128</strong>
              <span>Kbps</span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default AudioQuality;