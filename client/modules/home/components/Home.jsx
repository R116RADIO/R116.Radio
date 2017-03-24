import React from 'react';
import RadioHeader from './Header.jsx';
import RadioBox from './RadioBox.jsx';
import ProgramSchedule from './ProgramSchedule.jsx';
import Contact from './Contact.jsx';
import RadioFooter from './Footer.jsx';
import {SectionsContainer, Section, Header, Footer} from 'react-fullpage';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quality: 32,
      currentProgram: '',
      mounted: true
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
    if (this) {
      if ($(window).width() <= 767 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))
        this.setState({
          anchors: ['playMusic', 'programSchedule', 'contacForm'],
          fullScreen: true
        });
      else
        this.setState({
          anchors: ['playMusic', 'programSchedule'],
          fullScreen: false
        });

      this.setState({mounted: !this.state.mounted});
      setTimeout(() => {
        this.setState({mounted: !this.state.mounted});
      }, 200);
    }
  }

  render() {
    const options = {
      anchors: this.state.anchors,
      scrollBar: false,
      verticalAlign: true,
      arrowNavigation: false
    };

    return (
      <div className="home-page">
        {
          this.state.mounted ?
            this.state.fullScreen ?
              <SectionsContainer {...options}>
                <Section>
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
                </Section>
                <Section>
                  <ProgramSchedule
                    currentProgram={this.state.currentProgram}
                    changeCurrentProgram={this.changeCurrentProgram} />
                </Section>
                <Section>
                    <Contact />
                    <RadioFooter />
                </Section>
              </SectionsContainer> :
              <SectionsContainer {...options}>
                <Section>
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
                </Section>
                <Section>
                    <Contact />
                    <RadioFooter />
                </Section>
              </SectionsContainer> :
          null
        }
      </div>
    );
  }
}

export default Home;
