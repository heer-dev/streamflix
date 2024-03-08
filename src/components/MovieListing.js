import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import '../assets/App.css'; 

const MovieListing = () => {
  const [listings, setListings] = useState([]);
  const history = useHistory();

  const handleClick = (id) => {
    history.push(`/MovieDetails/${id}`);
  };

  useEffect(() => {
    fetch('http://localhost:4000/movieListing')
      .then(response => response.json())
      .then(data => setListings(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="movie-listing-page">
      {listings.map((item) => (
        <div key={item.id} className="movie-listing-card" onClick={() => handleClick(item.id)}>
          <img src={item.poster} alt={item.title} className="movie-listing-poster" />
          <h3 className="movie-listing-title">{item.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default MovieListing;
