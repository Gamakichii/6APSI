import React, { useState } from 'react';
import './LoginPage.css';
import LandingPage from './LandingPage';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    
    // Simple validation - you can add more sophisticated authentication here
    if (username.trim() && password.trim()) {
      setLoggedInUser(username);
      setIsLoggedIn(true);
    } else {
      alert('Please enter both username and password');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setLoggedInUser('');
    setUsername('');
    setPassword('');
  };

  // Show landing page if logged in
  if (isLoggedIn) {
    return <LandingPage username={loggedInUser} onLogout={handleLogout} />;
  }

  return (
    <div className="login-page">
      <div>
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          /><br />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          /><br />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
