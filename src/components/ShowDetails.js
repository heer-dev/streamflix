import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../assets/App.css'; 

const MediaDetails = () => {
  const [details, setDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(true); 
  const [error, setError] = useState(null); 
  const { id } = useParams(); 
  
  useEffect(() => {
    setIsLoading(true); 
    fetch(`https://streamflic-backend-827287f6aade.herokuapp.com/media/${id}`) 
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        setDetails(data);
        setIsLoading(false); 
      })
      .catch(error => {
        console.error('Error fetching details:', error);
        setError(error.message);
        setIsLoading(false);
      });
  }, [id]);
  
  if (isLoading) {
    return <div>Loading...</div>; 
  }

  if (error) {
    return <div>Error: {error}</div>; 
  }
  
  if (details) {
    const { 
      name, 
      synopsis, 
      largePosterPath, 
      rentPrice, 
      purchasePrice 
    } = details;
    
    return (
      <div className='media-details'>
        <div className="media-details-page">
          <img src={largePosterPath} alt={`${name} Poster`} className="media-details-large-poster" />
          <div className="media-details-text">
            <h1 className="media-details-title">{name}</h1>
            <div className="media-details-purchase-info">
              {rentPrice && <button className="media-details-rent-button">Rent ${rentPrice.toFixed(2)}</button>}
              {purchasePrice && <button className="media-details-buy-button">Buy ${purchasePrice.toFixed(2)}</button>}
            </div>
            <p className="media-details-synopsis">{synopsis}</p>
          </div>
        </div>
      </div>
    );
  }

  
  return <div>No media details available.</div>;
};

export default MediaDetails;
