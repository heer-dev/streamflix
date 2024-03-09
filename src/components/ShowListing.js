import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import '../assets/App.css';

const ShowListing = () => {
  const [listings, setListings] = useState([]);
  const history = useHistory();

  const handleClick = (id) => {
    history.push(`/ShowDetails/${id}`); 
  };

  useEffect(() => {
    fetch('https://good-teal-reindeer-vest.cyclic.app/movieListing')
      .then(response => response.json())
      .then(data => setListings(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="show-listing-page"> 
      {listings.map((item) => (
        <div key={item.id} className="show-listing-card" onClick={() => handleClick(item.id)}> 
          <img src={item.poster} alt={item.title} className="show-listing-poster" /> 
          <h3 className="show-listing-title">{item.title}</h3> 
        </div>
      ))}
    </div>
  );
};

export default ShowListing;
