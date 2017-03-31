import React, {Component} from 'react';
import moment from 'moment-timezone';

class ProgramSchedule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      programSchedule: []
    };
    this.setCurrentProgram = this.setCurrentProgram.bind(this);
  }

  updateSchedule() {
    const programSchedule = ENUMS.PROGRAM_SCHEDULE;
    const utcOffset = moment().utcOffset();
    const Today = moment().day();
    const Yesterday = moment().subtract(1, 'day').day();
    const Tomorrow = moment().add(1, 'day').day();
    const Programs = _.filter(programSchedule,
      (program) => program.dayOfWeek === Yesterday ||
        program.dayOfWeek === Today ||
        program.dayOfWeek === Tomorrow);

    _.each(Programs, (program) => {
      let day = 0;

<<<<<<< HEAD
      if (program.dayOfWeek === Yesterday)
        day = -1;
      else if (program.dayOfWeek === Tomorrow)
        day = 1;
      _.each(program.programs, (_program) => {
        const from = moment(_program.from, 'HH:mm').add(utcOffset, 'm').add(day, 'day');
        const to = moment(_program.to, 'HH:mm').add(utcOffset, 'm').add(day, 'day');
=======
    _.each(todayPrograms, (program) => {
      let from = moment.tz(program.from, 'HH:mm', 'Eire');
      let to = moment.tz(program.to, 'HH:mm', 'Eire');

      from = from.clone().tz(moment.tz.guess());
      to = to.clone().tz(moment.tz.guess());
>>>>>>> d88232c03f260897a7b71a398e589a709910a386

        _program.from = from;
        _program.to = to;
      });
    });
    let todayPrograms = _.flatten(_.map(Programs, (program) => program.programs));

    todayPrograms = _.filter(todayPrograms, (program => program.from.day() === Today));
    return todayPrograms;
  }

  componentDidMount() {
    const programSchedule = this.updateSchedule();

    this.setState({
      programSchedule
    }, () => {
      setInterval(this.setCurrentProgram, 1000);
    });
  }

  isActiveSchedule({ from, to }) {
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
