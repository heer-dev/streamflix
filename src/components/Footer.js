import React from 'react';
import '../assets/App.css'; 
import "../assets/images/apple.png"
import apple from "../assets/images/apple.png"; 
import googlePlay from "../assets/images/GooglePlay.png"; 
import microsoft from "../assets/images/Microsoft.png";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>Watch</h4>
          <ul>
            <li>Movies</li>
            <li>TV</li>
            <li>Free</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>My Account</h4>
          <ul>
            <li>Account</li>
            <li>Settings</li>
            <li>My Subscriptions</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Features</h4>
          <ul>
            <li>FAQ</li>
            <li>Help Desk</li>
            <li>Software Updates</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Help</h4>
          <ul>
            <li>About Us</li>
            <li>Careers</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="footer-section social-media">
        <h4>Social Media</h4>
        <ul>
            <li><a href="https://facebook.com">Facebook</a></li>
            <li><a href="https://twitter.com">Twitter</a></li>
            <li><a href="https://instagram.com">Instagram</a></li>
          </ul>
        </div>
        <div className="footer-section app-badges">
        <h4>App</h4>
        <ul>
          <li><img src={apple} alt="App Store" /></li>
          <li><img src={googlePlay} alt="Google Play" /></li>
          <li><img src={microsoft} alt="Microsoft Store" /></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
