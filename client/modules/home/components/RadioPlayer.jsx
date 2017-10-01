import React from 'react';
import { GENRE_TYPE } from './Home';

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

  reloadAudioInfo() {
    window.centovacast.loader.add("streaminfo", function(b) {
        b.extend(window.centovacast.streaminfo.settings, window.centovacast.options.streaminfo);
        window.centovacast.streaminfo.settings.manual || window.centovacast.streaminfo.run()
    }, function(b) {
        window.centovacast.options.streaminfo = b.extend({}, window.centovacast.options.streaminfo, window.centovacast.streaminfo ? window.centovacast.streaminfo.config : null);
        return window.centovacast.streaminfo = {
            pollcount: 0,
            settings: {
                poll_limit: 60,
                poll_frequency: 6E4
            },
            state: {},
            registry: {},
            check_username: function(a) {
                a += "";
                if (!this.registry[a]) {
                    if (1 == this.registry.length) {
                        for (var b in this.registry) a = b;
                        return a
                    }
                    return ""
                }
                return a
            },
            get_streaminfo_element: function(a, c) {
                return b("#" + this.registry[a].id[c])
            },
            _handle_json: function(a) {
                if (a) {
                    var c = this.check_username(a.rid);
                    !c.length && a.requestdata && (c = this.check_username(a.requestdata.rid));
                    if (c.length)
                        if ("error" == a.type) {
                            if (a = a ? a.error : "No JSON object", this.get_streaminfo_element(c, "song").html('<span title="' + a + '">Unavailable</span>'),
                                "function" == typeof this.settings.on_error_callback) this.settings.on_error_callback(a)
                        } else {
                            var d, e = a.data[0];
                            this.state = e;
                            a.data[0].songchanged = e.song != this.settings.lastsong;
                            "function" == typeof this.settings.before_change_callback && this.settings.before_change_callback(a);
                            for (d in e) "song" == d || "string" != typeof e[d] && "number" != typeof e[d] || this.get_streaminfo_element(c, d).html(e[d]);
                            if ("object" == typeof e.track) {
                                for (d in e.track) "buyurl" == d || "imageurl" == d || "playlist" == d || "string" != typeof e.track[d] &&
                                    "number" != typeof e.track[d] || this.get_streaminfo_element(c, "track" + d).html(e.track[d]);
                                this.get_streaminfo_element(c, "playlist").html("object" == typeof e.track.playlist ? e.track.playlist.title : "");
                                d = e.track.buyurl ? e.track.buyurl : "javascript:void(0)";
                                b("img#" + this.registry[c].id.trackimageurl).attr("src", e.track.imageurl);
                                b("a#" + this.registry[c].id.trackbuyurl).attr("href", d)
                            }
                            "function" == typeof this.settings.after_change_callback && this.settings.after_change_callback(a);
                            var f = e.song;
                            f && f != this.registry[c].current_song &&
                                (this.get_streaminfo_element(c, "song").fadeOut("fast", function() {
                                    b(this).html(f);
                                    b(this).fadeIn("fast")
                                }), this.registry[c].current_song = f)
                        }
                }
            },
            handle_json: function(a, b, d) {
                a && window.centovacast.streaminfo._handle_json(a)
            },
            poll: function(a) {
                b.getJSONP((this.settings.local ? "/" : window.centovacast.loader.url) + "external/rpc.php", {
                    m: "streaminfo.get",
                    username: a,
                    charset: this.registry[a].charset,
                    mountpoint: this.registry[a].mountpoint,
                    rid: a
                }, this.handle_json)
            },
            _poll_all: function() {
                for (var a in this.registry) "string" ==
                    typeof a && this.poll(a);
                (0 === this.settings.poll_limit || this.pollcount++ < this.settings.poll_limit) && setTimeout(this.poll_all, this.settings.poll_frequency)
            },
            poll_all: function() {
                window.centovacast.streaminfo._poll_all()
            },
            register: function(a, b, d, e) {
                this.registry[b] || (this.registry[b] = {
                    charset: d,
                    mountpoint: e,
                    current_song: "",
                    id: {}
                });
                (d = a.match(/^cc_strinfo_([a-z]+)_/)) && (this.registry[b].id[d[1]] = a)
            },
            load: function() {
                var a = b(this).attr("id");
                if ("string" == typeof a) {
                    var c = a.replace(/^cc_strinfo_[a-z]+_/, ""),
                        d = "",
                        e = "",
                        f = /_cs-([A-Za-z0-9\-]+)$/,
                        g = f.exec(c);
                    g && (d = g[1], c = c.replace(f, ""));
                    f = /_mp-([A-Za-z0-9\-]+)$/;
                    if (g = f.exec(c)) e = g[1], c = c.replace(f, "");
                    window.centovacast.streaminfo.register(a, c, d, e)
                }
            },
            run: function() {
                b(".cc_streaminfo").each(window.centovacast.streaminfo.load);
                window.centovacast.streaminfo.poll_all()
            }
        }
    });
  };

  componentDidUpdate(prevProps) {
    if (prevProps.genre !== this.props.genre) {
      this.reloadAudio();
      this.reloadAudioInfo();
    }
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
    const iconState = this.state.iconAudio ? 'fa-play' : 'fa-pause';
    const { genre } = this.props;

    let src = '';

    switch (genre) {
      case GENRE_TYPE['Slow Jams']:
        src = `http://admin.r116radio.com:8014/stream${genre}?cb=${new Date().getTime()}`;

        break;
      case GENRE_TYPE['Hip Hop']:
        src = `http://admin.r116radio.com:8006/stream${genre}?cb=${new Date().getTime()}`;

        break;
      case GENRE_TYPE['Pop Music']:
        src = `http://admin.r116radio.com:8010/stream${genre}?cb=${new Date().getTime()}`;

        break;
      default:
        src = `http://admin.r116radio.com:8014/stream${genre}?cb=${new Date().getTime()}`;

        break;
    }

    return (
      <div className="radio-player">
        <div className="radio-player__image-box">
          <img
            id={`cc_strinfo_trackimageurl_${genre}`}
            className="cc_streaminfo radio-player__album-image"
          />
        </div>
        <div className="radio-player__player-box">
          <div className="radio-player__audio">
            <audio className="radio-player__audio__source" id="audio" controls>
              <source src={src} />
            </audio>
            <button onClick={this.onPlayAudio} className="radio-player__audio__btn">
              <span className={'fa ' + iconState}></span>
            </button>
          </div>
          <div className="radio-player__detail">
            <span
              id={`cc_strinfo_tracktitle_${genre}`}
              className="cc_streaminfo radio-player__song-name"
            />
            <span
              id={`cc_strinfo_trackartist_${genre}`}
              className="cc_streaminfo radio-player__singer"
            />
            <span className="radio-player__music-type">{this.props.currentProgram}</span>
          </div>
        </div>
      </div>
    );
  }
}

RadioPlayer.propTypes = {
  genre: React.PropTypes.string.isRequired,
  currentProgram: React.PropTypes.string.isRequired
};

export default RadioPlayer;
