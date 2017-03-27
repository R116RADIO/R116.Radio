import React from 'react';
import RadioHeader from './Header.jsx';
import RadioBox from './RadioBox.jsx';
import ProgramSchedule from './ProgramSchedule.jsx';
import Contact from './Contact.jsx';
import RadioFooter from './Footer.jsx';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quality: 32,
      currentProgram: '',
      fullScreen: false
    };
    this.changeQuality = this.changeQuality.bind(this);
    this.changeCurrentProgram = this.changeCurrentProgram.bind(this);
  }

  changeQuality(quality) {
    this.setState({
      quality
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
        {
          this.state.fullScreen ?
            <div id="fullpage">
              <div className="section active">
                  <RadioHeader quality={this.state.quality} changeQuality={this.changeQuality} />
                  <div className="radio-box-all">
                    <RadioBox
                      quality={this.state.quality}
                      currentProgram={this.state.currentProgram}
                      changeQuality={this.changeQuality} />
                    {/* <a href="#contacForm" className="scrollDown bounce">
                      <img src="img/md-down.svg"/>
                    </a>*/}
                  </div>
              </div>
              <div className="section customSchedule">
                <ProgramSchedule
                  currentProgram={this.state.currentProgram}
                  changeCurrentProgram={this.changeCurrentProgram} />
              </div>
              <div className="section fp-auto-height-responsive">
                  <Contact />
              </div>
              <div className="section fp-auto-height">
                  <RadioFooter />
              </div>
            </div> :
            <div>
              <RadioHeader quality={this.state.quality} changeQuality={this.changeQuality} />
                <div className="radio-box-all">
                  <RadioBox
                    quality={this.state.quality}
                    currentProgram={this.state.currentProgram}
                    changeQuality={this.changeQuality} />
                  <ProgramSchedule
                    currentProgram={this.state.currentProgram}
                    changeCurrentProgram={this.changeCurrentProgram} />
                  {/* <a href="#contacForm" className="scrollDown bounce">
                    <img src="img/md-down.svg"/>
                  </a>*/}
                </div>
                <Contact />
                <RadioFooter />
              </div>
        }
      </div>
    );
  }
}

export default Home;
