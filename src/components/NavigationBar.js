import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import "../assets/App.css"

const NavigationBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const history = useHistory();


  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSearch = (e) => {
    e.preventDefault(); 
    if (!searchQuery) return; 
    history.push(`/search?query=${searchQuery}`); 
    setSearchQuery('');
  };
  return (
    <header className="header">
      <div className="hamburger-menu" onClick={toggleMenu}>☰</div>
      <nav className={`navigation ${isMenuOpen ? 'show' : ''}`}>
        <Link to="/" key="home">Home</Link>
        <Link to="/MovieListing" key="movies">Movies</Link>
        <Link to="/ShowListing" key="tvShows">TvShows</Link>
        <Link to="/Register" key="Registration">Sign Up</Link>
        <Link to="/login">Sign In</Link>
        <form onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>
      </nav>
    </header>
  );
};

export default NavigationBar;
