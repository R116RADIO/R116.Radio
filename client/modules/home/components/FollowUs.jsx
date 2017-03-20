import React, {Component} from 'react';

class FollowUs extends Component {
  render() {
    return (
      <div className="home-page__contact--follow-us">
        <h4 className="home-page__contact--follow-us--title">Follow us</h4>
        <ul className="home-page__contact--follow-us--social">
          <li><i className="fa fa-facebook-square"></i></li>
          <li><i className="fa fa-twitter-square"></i></li>
          <li><i className="fa fa-youtube"></i></li>
        </ul>
      </div>
    );
  }
}

export default FollowUs;