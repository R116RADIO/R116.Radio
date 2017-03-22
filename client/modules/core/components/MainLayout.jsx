import React from 'react';

class MainLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orientation: 'portrait'
    };
  }
  componentDidMount() {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))
      if (window.matchMedia('(orientation: landscape)').matches)
        this.setState({orientation: 'landscape'});
      else
        this.setState({orientation: 'portrait'});
    $(window).resize(() => {
      if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))
        if (window.matchMedia('(orientation: landscape)').matches)
          this.setState({orientation: 'landscape'});
        else
          this.setState({orientation: 'portrait'});
    });
  }
  render() {
    const {orientation} = this.state;

    return (
      <div id={orientation} className="main-layout-component">

        <div className="main-content">
          {this.props.content()}
        </div>

      </div>
    );
  }
}

export default MainLayout;
