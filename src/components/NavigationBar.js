import React, { useState } from 'react';
import RegistrationForm from './RegistrationForm';
import LoginForm from './LoginForm';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
  const [showForm, setShowForm] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleShowRegistration = (e) => {
    e.preventDefault();
    setShowForm('register');
    setIsMenuOpen(false); // Close the menu
  };

  const handleShowLogin = (e) => {
    e.preventDefault();
    setShowForm('login');
    setIsMenuOpen(false); // Close the menu
  };

  const handleClose = () => {
    setShowForm(null);
  };

  return (
    <header className="header">
      <div className="hamburger-menu" onClick={toggleMenu}>☰</div>
      <nav className={`navigation ${isMenuOpen ? 'show' : ''}`}>
        <Link to="/" key="home">Home</Link>
        <Link to="/MovieListing" key="movies">Movies</Link>
        <Link to="/ShowListing" key="tvShows">TvShows</Link>
        <a href="#" onClick={handleShowRegistration}>SignUp</a>
        <a href="#" onClick={handleShowLogin}>SignIn</a>
      </nav>
      {showForm === 'register' && <RegistrationForm onClose={handleClose} />}
      {showForm === 'login' && <LoginForm onClose={handleClose} />}
    </header>
  );
};

export default NavigationBar;
