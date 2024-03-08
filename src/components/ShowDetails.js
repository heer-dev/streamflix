import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../assets/App.css'; 

const ShowDetails = () => {
  const [details, setDetails] = useState([]); 
  const { id } = useParams(); 
  
  useEffect(() => {
    fetch(`http://localhost:4000/showListing/${id}`) 
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
      <div className="show-details"> 
        <div className="show-details-page"> 
          <img src={poster} alt={`${title} Poster`} className="show-details-large-poster" /> 
          <div className='show-details-text'>
          <h1 className="show-details-title">{title}</h1> 
        
        <div className="show-details-purchase-info"> 
          <button className="show-details-rent-button">Rent ${rentPrice}</button> 
          <button className="show-details-buy-button">Buy ${purchasePrice}</button> 
        </div>
        <p className="show-details-synopsis">{synopsis}</p>
      </div>
      </div>
      </div>
    );
  }
  return <div>Loading...</div>; 
};

export default ShowDetails;
