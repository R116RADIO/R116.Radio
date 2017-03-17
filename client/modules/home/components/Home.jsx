import React from 'react';
import Header from './Header.jsx';
import RadioBox from './RadioBox.jsx';
import Contact from './Contact.jsx';
import Footer from './Footer.jsx';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

  }

  render() {
    return (
      <div className="home-page">
        <Header />
        <RadioBox />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default Home;
