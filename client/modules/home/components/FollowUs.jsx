import React, {Component} from 'react';

class FollowUs extends Component {
  render() {
    return (
      <div className="home-page__contact--follow-us">
        <h4 className="home-page__contact--follow-us--title">Follow us</h4>
        <ul className="home-page__contact--follow-us--social">
          <li><a href="https://www.facebook.com/r116radio" target="_blank"><i className="fa fa-facebook-square"></i></a></li>
          <li><a href="https://twitter.com/RadioR116" target="_blank"><i className="fa fa-twitter-square"></i></a></li>
          <li><a href="https://www.youtube.com/channel/UCY8g8_yFErAKvCpkJR1nfvA" target="_blank"><i className="fa fa-youtube"></i></a></li>
        </ul>
      </div>
    );
  }
}

export default FollowUs;
