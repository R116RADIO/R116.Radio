import React from 'react';

class RadioPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      iconAudio: true
    };
    this.onPlayAudio = this.onPlayAudio.bind(this);
    this.reloadAudio = this.reloadAudio.bind(this);
  }

  reloadAudio() {
    const audioFile = document.getElementById('audio');

    audioFile.load();
    audioFile.play();
    this.setState({iconAudio: false});
  }

  componentDidUpdate(prevProps) {
    if (prevProps.quality !== this.props.quality)
      this.reloadAudio();
  }


  onPlayAudio() {
    const audioFile = document.getElementById('audio');

    this.setState({iconAudio: !this.state.iconAudio});
    if (this.state.iconAudio)
      audioFile.play();
    else
      audioFile.pause();
  }
  render() {
    const trackTitle = <span id="cc_strinfo_tracktitle_rjakech"
      className="cc_streaminfo radio-player__song-name"></span>;
    const trackArtist = <span id="cc_strinfo_trackartist_rjakech"
      className="cc_streaminfo radio-player__singer"></span>;
    const albumImage = <img id="cc_strinfo_trackimageurl_rjakech"
      className="cc_streaminfo radio-player__album-image" />;
    const iconState = this.state.iconAudio ? 'fa-play' : 'fa-pause';
    let src = '';

    switch (this.props.quality) {
      case 32:
        src = `http://tachyon.shoutca.st:8982/stream2?cb=${new Date().getTime()}`;
        break;
      case 64:
        src = `http://tachyon.shoutca.st:8982/stream3?cb=${new Date().getTime()}`;
        break;
      case 128:
        src = `http://tachyon.shoutca.st:8982/stream?cb=${new Date().getTime()}`;
        break;
      default:
        src = `http://tachyon.shoutca.st:8982/stream2?cb=${new Date().getTime()}`;
        break;
    }
    const radioPlayer = (
      <audio className="radio-player__audio__source" id="audio" controls>
        <source src={src} />
      </audio>
    );

    return (
      <div className="radio-player">
        {albumImage}
        <div className="radio-player__player-box">
          <div className="radio-player__audio">
            {radioPlayer}
            <button onClick={this.onPlayAudio} className="radio-player__audio__btn">
              <span className={'fa ' + iconState}></span>
            </button>
          </div>
          <div className="radio-player__detail">
            {trackTitle}
            {trackArtist}
            <span className="radio-player__music-type">R & B Soul</span>
          </div>
        </div>
      </div>
    );
  }
}

RadioPlayer.propTypes = {
  quality: React.PropTypes.number.isRequired
};

export default RadioPlayer;
