import bgImage from './bg.jpg';
import React from 'react';
import './WelcomePage.css';

class WelcomePage extends React.Component {
  render() {
    
    return (
      <div className="welcome-page">
        <img src={bgImage} alt="Background" className="background-image" />
        
        <div className="content">
          <h1>Welcome to CVR College Of Engineering</h1>
         
        </div>
      </div>
    );
  }
}

export default WelcomePage;