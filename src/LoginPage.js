import React, { useState } from 'react';
import './LoginPage.css';

function LoginPage({ onBack }) {
 
  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
       
      /><br />
      <input
        type="password"
        placeholder="Password"
     
      /><br />
      <button >Login</button>
      <button style={{ marginTop: '1rem', background: '#888' }} onClick={onBack}>Back</button>
    </div>
  );
}

export default LoginPage;