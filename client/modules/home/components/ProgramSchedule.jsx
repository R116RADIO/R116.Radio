import React, {Component} from 'react';
import moment from 'moment';

class ProgramSchedule extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const programSchedule = ENUMS.PROGRAM_SCHEDULE;
    const programActive = ' home-page__program-schedule--item--active';

    // console.log(moment().utcOffset());
    return (
      <div className="home-page__program-schedule">
        <h3 className="home-page__program-schedule--title">Programme Schedule</h3>
        <ul>
          {
            _.map(programSchedule, (program, index) => {
              return (
                <li className={'home-page__program-schedule--item' + (index === 3 ? programActive : '')} key={index}>
                  <div className="home-page__program-schedule--item--time">
                    {program.time.from} - {program.time.to}
                  </div>
                  <div className="home-page__program-schedule--item--program">{program.program}</div>
                </li>
              );
            })
          }
        </ul>
        <div className="home-page__program-schedule--download">
          <a href="#" className="google-play-btn">
            <img src="/img/google-play.png" alt=""/>
          </a>
          <a href="#" className="appstore-btn">
            <img src="/img/appstore.png" alt=""/>
          </a>
        </div>
      </div>
    );
  }
}

export default ProgramSchedule;