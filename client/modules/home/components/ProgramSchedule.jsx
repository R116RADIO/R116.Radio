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
    const todayPrograms = (_.filter(programSchedule,
    (program) => program.dayOfWeek === DayOfWeek))[0].programs;

    _.each(todayPrograms, (program) => {
      const from = moment(program.from, 'HH:mm').add(utcOffset, 'm');
      const to = moment(program.to, 'HH:mm').add(utcOffset, 'm');

      program.from = from;
      program.to = to;
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
