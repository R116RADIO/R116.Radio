import React, {Component} from 'react';
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
    const programSchedule = ENUMS.PROGRAM_SCHEDULE;
    const utcOffset = moment().utcOffset();

    _.each(programSchedule, (program) => {
      const from = moment(program.time.from, 'HH:mm').add(utcOffset, 'm');
      const to = moment(program.time.to, 'HH:mm').add(utcOffset, 'm');

      program.time.from = from;
      program.time.to = to;
    });

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
      if (this.isActiveSchedule(program.time))
        currentProgram = program.program;
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
                <li className={'home-page__program-schedule--item' + (program.program === this.props.currentProgram ? programActive : '')} key={index}>
                  <div className="home-page__program-schedule--item--time">
                    {program.time.from.format('HH:mm')} - {program.time.to.format('HH:mm')}
                  </div>
                  <div className="home-page__program-schedule--item--program">
                    {program.program}
                  </div>
                </li>
              );
            })
          }
        </ul>
        <div className="home-page__program-schedule--download">
          <a href="#" className="google-play-btn">
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