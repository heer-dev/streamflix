import React from 'react'; 
import NavigationBar from './NavigationBar';
import logo from '../assets/images/logo1.png'; 
import "../assets/App.css"

const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="Website Logo" className="logo" />
      <NavigationBar />
    </header>
  );
};

export default Header;
