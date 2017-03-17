import React from 'react';

class RadioPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      iconAudio: true
    }
    this.onPlayAudio = this.onPlayAudio.bind(this);
  }

  onPlayAudio() {
    const audioFile = document.getElementById("audio"); 

    this.setState({iconAudio: !this.state.iconAudio});

    if (this.state.iconAudio)
      audioFile.play();
    else
      audioFile.pause();
  }
  
  render() {
    let currentSong = <span id="cc_strinfo_rawmeta_rjakech" className="cc_streaminfo home-page__song-name"></span>
    let bitRate = <span id="cc_strinfo_bitrate_rjakech" className="cc_streaminfo"></span>
    let currentPlaylist = <span id="cc_strinfo_playlist_rjakech" className="cc_streaminfo home-page__music-type"></span> 
    let albumImage = <img id="cc_strinfo_trackimageurl_rjakech" className="cc_streaminfo home-page__album-image" />
    let iconState = this.state.iconAudio ? 'fa-play' : 'fa-pause';

    return (
      <div className="home-page__radio-player">
        {albumImage}
        <div className="home-page__player-box">
          <div className="home-page__audio">
            <audio className="home-page__audio__source" id="audio" controls>
              <source src="http://tachyon.shoutca.st:8982/stream" />
            </audio>
            <button onClick={this.onPlayAudio} className="home-page__audio__btn">
              <span className={'fa ' + iconState}></span>
            </button>
          </div>
          <div className="home-page__detail">
            {/*currentSong}
            {currentPlaylist*/}
            <span className="home-page__song-name">All that I am</span>
            <span className="home-page__singer">Deitrick Haddon</span>
            <span className="home-page__music-type">R & B Soul</span>
          </div>
        </div>
      </div>
    );
  }
}

export default RadioPlayer;
