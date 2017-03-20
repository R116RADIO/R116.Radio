import React from 'react';

class RadioPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      iconAudio: true
    };
    this.onPlayAudio = this.onPlayAudio.bind(this);
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
    // let currentSong = <span id="cc_strinfo_rawmeta_rjakech" className="cc_streaminfo radio-player__song-name"></span>
    // let bitRate = <span id="cc_strinfo_bitrate_rjakech" className="cc_streaminfo"></span>
    // let currentPlaylist = <span id="cc_strinfo_playlist_rjakech" className="cc_streaminfo radio-player__music-type"></span>
    const albumImage = <img id="cc_strinfo_trackimageurl_rjakech" className="cc_streaminfo radio-player__album-image" />;
    const iconState = this.state.iconAudio ? 'fa-play' : 'fa-pause';

    return (
      <div className="radio-player">
        {albumImage}
        <div className="radio-player__player-box">
          <div className="radio-player__audio">
            <audio className="radio-player__audio__source" id="audio" controls>
              <source src="http://tachyon.shoutca.st:8982/stream" />
            </audio>
            <button onClick={this.onPlayAudio} className="radio-player__audio__btn">
              <span className={'fa ' + iconState}></span>
            </button>
          </div>
          <div className="radio-player__detail">
            {/* currentSong}
            {currentPlaylist*/}
            <span className="radio-player__song-name">All that I am</span>
            <span className="radio-player__singer">Deitrick Haddon</span>
            <span className="radio-player__music-type">R & B Soul</span>
          </div>
        </div>
      </div>
    );
  }
}

export default RadioPlayer;
