import React, {Component} from 'react';

class ContactForm extends Component {
  render() {
    return (
      <div className='home-page__contact--form'>
        <h4 className='home-page__contact--form--title'>Write to us</h4>
        <form id="form-contact" className="form-contact">
          <div className="input-group">
            <label htmlFor="email">Enter your email address</label>
            <input type="text" id="email" placeholder="Enter your email addres" />
          </div>
          <div className="input-group">
            <label htmlFor="subject">Subject of your message</label>
            <input type="text" id="subject" placeholder="Subject..." />
          </div>
          <div className="input-group">
            <label htmlFor="message">Enter your message</label>
            <textarea id="message" rows="6" placeholder="Enter your message"></textarea>
          </div>
          <button type="submit" form="form-contact" value="Submit">Send your message</button>
        </form>
      </div>
    );
  }
}

export default ContactForm;