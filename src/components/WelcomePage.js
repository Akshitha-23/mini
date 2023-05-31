import React from 'react';
import './WelcomePage.css';

import bgImage from './bg.jpg';

class WelcomePage extends React.Component {
  render() {
    return (
      <div className="welcome-page">
        <img src={bgImage} alt="Background" className="background-image" />
        <div className="content">
          <h1>Welcome to CVR</h1>
          <p>We are excited to have you here.</p>
        </div>
      </div>
    );
  }
}

export default WelcomePage;
