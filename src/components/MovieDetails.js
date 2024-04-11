import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../assets/App.css'; 

const MovieDetails = () => {
  const [details, setDetails] = useState(null);
  const { id } = useParams(); 
  
  useEffect(() => {
    fetch(`http://localhost:8080/media/${id}`) 
      .then(response => response.json())
      .then(data => setDetails(data))
      .catch(error => console.error('Error fetching details:', error));
  }, [id]);
  
  if (details) {
    const { 
      name = '', 
      synopsis = '', 
      largePosterPath = '', 
      rentPrice = '', 
      purchasePrice = '' 
    } = details;
    
    return (
      <div className='media-details'>
        <div className="media-details-page">
  <img src={largePosterPath} alt={`${name} largePosterPath`} className="media-details-large-poster" />
  <div className="media-details-text">
    <h1 className="media-details-title">{name}</h1>
    <div className="media-details-purchase-info">
      <button className="media-details-rent-button">Rent ${rentPrice}</button>
      <button className="media-details-buy-button">Buy ${purchasePrice}</button>
    </div>
    <p className="media-details-synopsis">{synopsis}</p>
  </div>
      </div>
      </div>
    );
  }

  return <div>Loading...</div>;
};

export default MovieDetails;