import React from 'react';
import RadioPlayer from './RadioPlayer.jsx';
import AudioGenre from './AudioGenre.jsx';

class RadioBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      heightWindow: ''
    };
  }
  componentDidMount() {
    // if ($(window).width() <= 767)
    //   if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))
    //     this.setState({heightWindow: $(window).height() - 89});
    //
    // // initialize window resize
    // $(window).resize(() => {
    //   if ($(window).width() <= 767)
    //     if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))
    //       this.setState({heightWindow: $(window).height() - 89});
    // });
  }
  render() {
    // const {heightWindow} = this.state;
    // const styleHight = {
    //   height: heightWindow
    // };
    return (
      <div className="radio-box">
        <div className="inner">
          <RadioPlayer
            genre={this.props.genre}
            currentProgram={this.props.currentProgram} />
          <div className="quality-wrapper hidden-desktop">
            <AudioGenre genre={this.props.genre} changeGenre={this.props.changeGenre}/>
          </div>
        </div>
      </div>
    );
  }
}

export default RadioBox;
