import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import "../assets/App.css"
import { Link } from 'react-router-dom';
const Registration = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const history = useHistory();

  const handleRegister = async (e) => {
    e.preventDefault();
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  if (password !== confirmPassword) {
    alert("Passwords don't match");
    return;
  }

  if (!passwordRegex.test(password)) {
    alert("Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one digit, and one special character.");
    return;
  }
  
  try {
    const response = await fetch('https://streamflic-backend-827287f6aade.herokuapp.com/customers/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ firstName, lastName, email, password })
    });
  
  const contentType = response.headers.get("content-type");
    let data;
    if (contentType && contentType.indexOf("application/json") !== -1) {
     data = await response.json();
    } else {
      data = await response.text(); 
    }
  
      if (response.ok) {
        alert('Registration successful, you will be redirected to the login page.');
        setTimeout(() => {
          history.push('/login');
        }, 2000); 
      } else {
        const message = data.message || data;
        if (message.includes('email already in use')) {
          alert('This email is already in use. Please log in instead.');
          history.push('/login');
        } else {
          alert(message || 'Failed to register. Please try again.');
        }
      }
    } catch (error) {
      console.error("Registration error:", error);
      alert('An error occurred during registration. Please try again later.');
    }
  };

  return (
    <div className="auth-form-container">
    <h2 className="auth-form-header">Register</h2>
    <form onSubmit={handleRegister} className="auth-form">
        <div>
          <label>First Name:</label>
          <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
        </div>
        <div>
          <label>Last Name:</label>
          <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <div>
          <label>Confirm Password:</label>
          <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
        </div>
        <button type="submit">Register</button>
        <div className="auth-form-footer">
            Already have an account? <Link to="/login" >Log In</Link>
        </div>
      </form>
    </div>
  );
};

export default Registration;