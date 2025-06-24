import React, { useState } from 'react';
import './LandingPage.css';
import LoginPage from './LoginPage';

function LandingPage({ username }) {
  const [showLogin, setShowLogin] = useState(false);

  if (showLogin) {
    return (
      <div className="login-page">
        <LoginPage onBack={() => setShowLogin(false)} />
      </div>
    );
  }

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
        
        <button className="logout-button" onClick={() => setShowLogin(true)}>
          Go to Login
        </button>
      </div>
    </div>
  );
}

export default LandingPage;
