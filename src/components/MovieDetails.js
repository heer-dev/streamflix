import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../assets/App.css'; 

const MovieDetails = () => {
  const [details, setDetails] = useState([]);
  const { id } = useParams(); 
  
  useEffect(() => {
    fetch(`http://localhost:4000/movieListing/${id}`) 
      .then(response => response.json())
      .then(data => setDetails(data))
      .catch(error => console.error('Error fetching details:', error));
  }, [id]);
  
  if (details) {
    const { 
      title = '', 
      synopsis = '', 
      poster = '', 
      rentPrice = '', 
      purchasePrice = '' 
    } = details;
    
    return (
      <div className='movie-details'>
        <div className="movie-details-page">
  <img src={poster} alt={`${title} Poster`} className="movie-details-large-poster" />
  <div className="movie-details-text">
    <h1 className="movie-details-title">{title}</h1>
    <div className="movie-details-purchase-info">
      <button className="movie-details-rent-button">Rent ${rentPrice}</button>
      <button className="movie-details-buy-button">Buy ${purchasePrice}</button>
    </div>
    <p className="movie-details-synopsis">{synopsis}</p>
  </div>
      </div>
      </div>
    );
  }

  return <div>Loading...</div>;
};

export default MovieDetails;