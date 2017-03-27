import React, {Component} from 'react';
require('bootstrap-sass/assets/javascripts/bootstrap/button.js');

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      from: '',
      subject: '',
      text: '',
      error: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const {from, subject, text} = this.state;

    $(this.refs.sendEmailBtn).button('loading');

    if (GLOBAL.checkEmail(from)) {
      this.setState({error: ''});
      Meteor.call('emails.send', from, subject, text, (err) => {
        if (err)
          alert(err.reason);
        this.setState({
          from: '',
          subject: '',
          text: ''
        });
        $(this.refs.sendEmailBtn).button('reset');
      });

    } else
      this.setState({error: 'Email invalid'});
  }

  handleInputChange(type, e) {
    e.preventDefault();
    this.setState({
      [type]: e.target.value
    });
  }

  render() {
    return (
      <div id="contacForm" className='home-page__contact--form'>
        <h4 className='home-page__contact--form--title'>Write to us</h4>
        <form id="form-contact" className="form-contact" onSubmit={this.handleSubmit}>
          <div className="input-group">
            <label htmlFor="email">Enter your email address</label>
            <input type="email" id="email" required value={this.state.from} onChange={this.handleInputChange.bind(this, 'from')} placeholder="Enter your email address" />
          </div>
          <div className="input-group">
            <label htmlFor="subject">Subject of your message</label>
            <input type="text" id="subject" required value={this.state.subject} onChange={this.handleInputChange.bind(this, 'subject')} placeholder="Subject..." />
          </div>
          <div className="input-group">
            <label htmlFor="message">Enter your message</label>
            <textarea id="message" rows="6" required value={this.state.text} onChange={this.handleInputChange.bind(this, 'text')} placeholder="Enter your message"></textarea>
          </div>
          <button
            ref="sendEmailBtn"
            data-loading-text="Sending..."
            type="submit"
            form="form-contact"
            value="Submit">Send your message</button>
        </form>
      </div>
    );
  }
}

export default ContactForm;
