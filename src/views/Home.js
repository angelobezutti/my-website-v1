import React from 'react';
import Welcome from '../components/sections/Welcome';
import News from '../components/sections/Projects';
import Roadmap from '../components/sections/WorkExperience';

class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Welcome hasBgColor invertColor />
        <News className="illustration-section-01" />
        <Roadmap topOuterDivider />
      </React.Fragment>
    );
  }
}

export default Home;