import React from 'react';
import RadioHeader from './Header.jsx';
import RadioBox from './RadioBox.jsx';
import ProgramSchedule from './ProgramSchedule.jsx';
import Contact from './Contact.jsx';
import RadioFooter from './Footer.jsx';

export const GENRE_TYPE = {
  'Slow Jams': 'r116slowjams',
  'Hip Hop': 'r116hiphop',
  'Pop Music': 'r116pop'
};

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      genre: GENRE_TYPE['Slow Jams'],
      currentProgram: '',
      fullScreen: false
    };
    this.changeGenre = this.changeGenre.bind(this);
    this.changeCurrentProgram = this.changeCurrentProgram.bind(this);
  }

  changeGenre(genre) {
    this.setState({
      genre
    });
  }

  changeCurrentProgram(currentProgram) {
    this.setState({
      currentProgram
    });
  }
  componentDidMount() {
    this.resizePage();
    // $(window).scroll(function () {
    //   if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))
    //     $('.scrollDown').css('display', 'none');
    //   else if (($(window).scrollTop() > 150) || ($(window).width() <= 767))
    //     $('.scrollDown').css('display', 'none');
    //   else
    //     $('.scrollDown').css('display', 'inline');
    //
    // });
    $(window).resize(() => {
      this.resizePage();
    });
  }
  resizePage() {
    if ($(window).width() <= 768 || (/Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)))
      this.setState({
        fullScreen: true
      });
    else
      this.setState({
        fullScreen: false
      });

  }

  componentWillUpdate(newProps, newState) {
    if (this.state.fullScreen === true && newState.fullScreen === false)
      $.fn.fullpage.destroy('all');
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.fullScreen !== this.state.fullScreen)
      if (this.state.fullScreen) {
        const fullPage = $('#fullpage');

        // if (fullPage.hasClass('fp-destroyed'))
        fullPage.fullpage();
      } else {
        // $.fn.fullpage.destroy('all');
        // $('body').removeAttr('style');
      }


  }

  render() {
    return (
      <div className="home-page">
        <div id="fullpage">
          <div className="section active">
              <RadioHeader genre={this.state.genre} changeGenre={this.changeGenre} />
              <div className="radio-box-all">
                <RadioBox
                  genre={this.state.genre}
                  currentProgram={this.state.currentProgram}
                  changeGenre={this.changeGenre} />
                {/* <a href="#contacForm" className="scrollDown bounce">
                  <img src="img/md-down.svg"/>
                </a>*/}

                {!this.state.fullScreen ?
                  <ProgramSchedule
                    currentProgram={this.state.currentProgram}
                    changeCurrentProgram={this.changeCurrentProgram} /> : null
                }
              </div>
              {!this.state.fullScreen ?
                <Contact /> : null
              }

              {!this.state.fullScreen ?
                <RadioFooter /> : null
              }
          </div>
          <div className="section customSchedule">
            {this.state.fullScreen ?
              <ProgramSchedule
                currentProgram={this.state.currentProgram}
                changeCurrentProgram={this.changeCurrentProgram} /> : null
            }
          </div>
          <div className="section fp-auto-height-responsive">
            {this.state.fullScreen ?
              <Contact /> : null
            }
          </div>
          <div className="section fp-auto-height">
            {this.state.fullScreen ?
              <RadioFooter /> : null
            }
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
