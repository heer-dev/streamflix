import React, { useState } from 'react';
import RegistrationForm from './RegistrationForm';
import LoginForm from './LoginForm';
import "../assets/App.css"
import { Link } from 'react-router-dom';

const NavigationBar = () => {
  const [showForm, setShowForm] = useState(null);

  const handleShowRegistration = () => {
    setShowForm('register');
  };

  const handleShowLogin = () => {
    setShowForm('login');
  };

  const handleClose = () => {
    setShowForm(null);
  };

  return (
    <header ckassName="header">
    <nav className="navigation">
      <Link to='/' key="home">Home</Link>
      <Link to='/MovieListing' key="movies">Movies</Link>
      <Link to='/ShowListing' key="tvShows">TvShows</Link>
      
      <div className='right-nav'>
      <button onClick={handleShowRegistration}>SignUp</button>
      <button onClick={handleShowLogin}>SignIn</button>
      </div>
      {showForm === 'register' && (
        <RegistrationForm onClose={handleClose} />
      )}
      {showForm === 'login' && (
        <LoginForm onClose={handleClose} />
      )}
   </nav>
    </header>
  );
};

export default NavigationBar;
