import React, {Component} from 'react';

class ProgramSchedule extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    // const now = new Date();
  }


  render() {
    const programSchedule = ENUMS.PROGRAM_SCHEDULE;
    const programActive = ' home-page__program-schedule--item--active';

    return (
      <ul className="home-page__program-schedule">
        <h3 className="home-page__program-schedule--title">Programme Schedule</h3>
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
    );
  }
}

export default ProgramSchedule;