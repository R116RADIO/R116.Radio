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
      quality: 32
    };
    this.changeQuality = this.changeQuality.bind(this);
  }

  changeQuality(quality) {
    this.setState({
      quality
    });
  }

  render() {
    return (
      <div className="home-page">
        <Header quality={this.state.quality} changeQuality={this.changeQuality} />
        <div className="radio-box-all">
          <RadioBox quality={this.state.quality} changeQuality={this.changeQuality} />
          <ProgramSchedule />
        </div>
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default Home;
