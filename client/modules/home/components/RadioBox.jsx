import React from 'react';
import RadioPlayer from './RadioPlayer.jsx';
import ProgramSchedule from './ProgramSchedule.jsx';
import AudioQuality from './AudioQuality.jsx';

class RadioBox extends React.Component {
  render() {
    return (
      <div className="radio-box">
        <div className="inner">
          <RadioPlayer />
          <ProgramSchedule />
          <div className="quality-wrapper hidden-desktop">
            <AudioQuality />
          </div>
        </div>
      </div>
    );
  }
}

export default RadioBox;