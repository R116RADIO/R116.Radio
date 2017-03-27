import React from 'react';
import RadioPlayer from './RadioPlayer.jsx';
import AudioQuality from './AudioQuality.jsx';

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
            quality={this.props.quality}
            currentProgram={this.props.currentProgram} />
          <div className="quality-wrapper hidden-desktop">
            <AudioQuality quality={this.props.quality} changeQuality={this.props.changeQuality}/>
          </div>
        </div>
      </div>
    );
  }
}

export default RadioBox;
