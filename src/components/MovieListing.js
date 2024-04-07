import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import '../assets/App.css'; 

const MovieListing = () => {
  const [listings, setListings] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const history = useHistory();

  const handleClick = (id) => {
    history.push(`/MovieDetails/${id}`);
  };

  useEffect(() => {
    const fetchListings = async () => {
      setIsLoading(true);
      try {
        const response = await fetch("https://streamflic-backend-827287f6aade.herokuapp.com/media/movies");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setListings(data);
      } catch (error) {
        console.error('Error fetching movie listings:', error);
        setError('Failed to fetch movie listings.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchListings();
  }, []);

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  if (isLoading) {
    return <div className="loading-message">Loading...</div>;
  }

  return (
    <div className="movie-listing-page">
      {listings.map((item) => (
        <div key={item.id} className="movie-listing-card" onClick={() => handleClick(item.id)}>
          <img src={item.smallPosterPath} alt={item.name} className="movie-listing-poster" />
          <h3 className="movie-listing-title">{item.name}</h3>
        </div>
      ))}
    </div>
  );
};

export default MovieListing;
