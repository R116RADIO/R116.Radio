import React, {Component} from 'react';
import ContactForm from './ContactForm.jsx';
import FollowUs from './FollowUs.jsx';

class Contact extends Component {
  render() {
    return (
      <div className="home-page__contact">
        <ContactForm />
        <FollowUs />
      </div>
    );
  }
}

export default Contact;