import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../assets/App.css'; 

const MediaDetails = () => {
  const [details, setDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(true); // State to handle loading
  const [error, setError] = useState(null); // State to handle error
  const { id } = useParams(); 
  
  useEffect(() => {
    setIsLoading(true); // Begin loading state
    fetch(`http://localhost:8080/media/${id}`) 
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        setDetails(data);
        setIsLoading(false); // End loading state
      })
      .catch(error => {
        console.error('Error fetching details:', error);
        setError(error.message);
        setIsLoading(false); // End loading state
      });
  }, [id]);
  
  if (isLoading) {
    return <div>Loading...</div>; // Display loading state
  }

  if (error) {
    return <div>Error: {error}</div>; // Display error state
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

  // If details are not available
  return <div>No media details available.</div>;
};

export default MediaDetails;
