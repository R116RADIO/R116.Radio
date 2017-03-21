import React from 'react';
import Header from './Header.jsx';
import RadioBox from './RadioBox.jsx';
import ProgramSchedule from './ProgramSchedule.jsx';
import Contact from './Contact.jsx';
import Footer from './Footer.jsx';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quality: 32,
      currentProgram: ''
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

  render() {
    return (
      <div className="home-page">
        <Header quality={this.state.quality} changeQuality={this.changeQuality} />
        <div className="radio-box-all">
          <RadioBox
            quality={this.state.quality}
            currentProgram={this.state.currentProgram}
            changeQuality={this.changeQuality} />
          <ProgramSchedule
            currentProgram={this.state.currentProgram}
            changeCurrentProgram={this.changeCurrentProgram} />
        </div>
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default Home;
