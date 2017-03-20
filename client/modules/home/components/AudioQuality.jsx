import React, {Component} from 'react';

class AudioQuality extends Component {
  constructor(props) {
    super(props);
  }

  changeQuality(quality) {
    this.props.changeQuality(quality);
  }

  render() {
    const qualityItemActive = 'quality__box__item quality__box__item--active';
    const qualityItem = 'quality__box__item quality__box__item';

    return (
      <div className="quality">
        <div className="quality__box">
          <p>Choose your audio quality:</p>
          <ul>
            <li className={this.props.quality === 32 ? qualityItemActive : qualityItem} onClick={this.changeQuality.bind(this, 32)}>
              <strong>32</strong>
              <span>Kbps</span>
            </li>
            <li className={this.props.quality === 64 ? qualityItemActive : qualityItem} onClick={this.changeQuality.bind(this, 64)}>
              <strong>64</strong>
              <span>Kbps</span>
            </li>
            <li className={this.props.quality === 128 ? qualityItemActive : qualityItem} onClick={this.changeQuality.bind(this, 128)}>
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