import React from 'react';
import RadioPlayer from './RadioPlayer.jsx';
import ProgramSchedule from './ProgramSchedule.jsx';

class RadioBox extends React.Component {
  render() {
    return (
      <div>
        <RadioPlayer />
        <ProgramSchedule />
      </div>
    );
  }
}

export default RadioBox;