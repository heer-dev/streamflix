// LoginPage.js
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import "../assets/App.css";
import { Link } from 'react-router-dom';

const LogIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
        const response = await fetch('http://localhost:8080/customers/authenticate', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        });

        if (!response.ok) {
            throw new Error('Failed to log in');
        }

        const userData = await response.json();
        localStorage.setItem('user', JSON.stringify(userData)); 
        alert(`Login successful, welcome ${userData.firstName}!`);
        history.push('/dashboard'); 
    } catch (error) {
        console.error('Login error:', error);
        alert(error.message);
    }
  };

  return (
    <div className="auth-form-container">
      <h2 className="auth-form-header">Login</h2>
      <form onSubmit={handleLogin} className="auth-form">
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit">Log In</button>
        <div className="auth-form-footer">
          Don't have an account? <Link to="/register">Register</Link>
        </div>
      </form>
    </div>
  );
};

export default LogIn;
