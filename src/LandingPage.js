import React from 'react';
import './LandingPage.css';

function LandingPage({ username, onLogout }) {
  return (
    <div className="landing-page">
      <div className="landing-container">
        <div className="logo">
          <div className="logo-icon">6</div>
          <span className="logo-text">6APSI</span>
        </div>
        
        <div className="welcome-section">
          <h1>Welcome, {username}!</h1>
        </div>
        
        <button className="logout-button" onClick={onLogout}>
          Logout
        </button>
      </div>
    </div>
  );
}

export default LandingPage;
