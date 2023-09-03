import bgImage from './wel.jpeg.jpg';
import React from 'react';
import './WelcomePage.css';

class WelcomePage extends React.Component {
  render() {
    
    return (
      <div className="welcome-page">
        <img src={bgImage} alt="Background" className="background-image" />
        
        <div className="content">COLLEGE ACADEMIC DASHBOARD
        </div>
      </div>
    );
  }
}

export default WelcomePage;