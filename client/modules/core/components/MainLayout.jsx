import React from 'react';

class MainLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

  }

  render() {
    return (
      <div className="main-layout-component">

        <div className="main-content">
          {this.props.content()}
        </div>

      </div>
    );
  }
}

export default MainLayout;
