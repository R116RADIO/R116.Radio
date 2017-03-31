import React, { Component } from 'react';
import moment from 'moment';

class ProgramSchedule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      programSchedule: []
    };
    this.setCurrentProgram = this.setCurrentProgram.bind(this);
  }

  componentDidMount() {
    let programSchedule = ENUMS.PROGRAM_SCHEDULE;
    const utcOffset = moment().utcOffset();
    const DayOfWeek = moment().day();
    const dayBefore = moment().subtract(1, 'day').day();
    const threeDays = JSON.parse(JSON.stringify(_.filter(programSchedule,
    (program) => (program.dayOfWeek === DayOfWeek) || (program.dayOfWeek === dayBefore))));
    let programs = [];
    for (let i = 0; i < threeDays.length; i++)
      programs.push(threeDays[i].programs);

    let todayPrograms = [], i = 0, j = 0;

    _.each(programs, (program) => {
      j++;
      let check = true;
      _.each(program, (program) => {
        let from = (j === 1) ? moment(program.from, 'HH:mm').subtract(1, 'day').add(utcOffset, 'm') : moment(program.from, 'HH:mm').add(utcOffset, 'm');
        let to = (j === 1) ? moment(program.to, 'HH:mm').subtract(1, 'day').add(utcOffset, 'm') : moment(program.to, 'HH:mm').add(utcOffset, 'm');

        if (to.day() < from.day()) {
          to.add(1, 'day');
        }
        if (j === 1) {
          if ((from.day() < to.day()) || (i === 1)) {
            program.from = from;
            program.to = to;
            todayPrograms.push(program);
            i = 1;
          }
        } else {
          if ((from.day() === to.day()) && (check === true)) {
            program.from = from;
            program.to = to;
            todayPrograms.push(program);
          } else check = false;
        }
      })
    });

    programSchedule = todayPrograms;

    this.setState({
      programSchedule
    }, () => {
      setInterval(this.setCurrentProgram, 1000);
    });
  }

  isActiveSchedule({from, to}) {
    return moment().isBetween(from, to);
  }

  setCurrentProgram() {
    let currentProgram = '';

    _.each(this.state.programSchedule, (program) => {
      if (this.isActiveSchedule(program))
        currentProgram = program.name;
    });

    this.props.changeCurrentProgram(currentProgram);
  }

  render() {
    const programActive = ' home-page__program-schedule--item--active';

    return (
      <div className="home-page__program-schedule">
        <h3 className="home-page__program-schedule--title">Programme Schedule</h3>
        <ul>
          {
            _.map(this.state.programSchedule, (program, index) => {
              return (
                <li className={'home-page__program-schedule--item' + (program.name === this.props.currentProgram ? programActive : '')} key={index}>
                  <div className="home-page__program-schedule--item--time">
                    {program.from.format('HH:mm')} - {program.to.format('HH:mm')}
                  </div>
                  <div className="home-page__program-schedule--item--program">
                    {program.name}
                  </div>
                </li>
              );
            })
          }
        </ul>
        <div className="home-page__program-schedule--download">
          <a href="https://play.google.com/store/apps/details?id=com.r116.radio" target="_blank" className="google-play-btn">
            <img src="/img/google-play.png" alt="" />
          </a>
          <a href="#" className="appstore-btn">
            <img src="/img/appstore.png" alt="" />
          </a>
        </div>
      </div>
    );
  }
}

ProgramSchedule.propTypes = {
  currentProgram: React.PropTypes.string.isRequired,
  changeCurrentProgram: React.PropTypes.func.isRequired
};

export default ProgramSchedule;
