import React from 'react';
import RadioPlayer from './RadioPlayer.jsx';
import AudioQuality from './AudioQuality.jsx';

class RadioBox extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="radio-box">
        <div className="inner">
          <RadioPlayer quality={this.props.quality} />
          <div className="quality-wrapper hidden-desktop">
            <AudioQuality quality={this.props.quality} changeQuality={this.props.changeQuality}/>
          </div>
        </div>
      </div>
    );
  }
}

export default RadioBox;
