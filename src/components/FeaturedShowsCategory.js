import React, { useState, useEffect } from 'react';
import ShowCard from './ShowCard';
import '../assets/App.css'; 

const FeaturedShowsCategory = () => {
  const [featuredShows, setFeaturedShows] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/featuredShows')
      .then(response => response.json())
      .then(data => setFeaturedShows(data))
      .catch(error => {
        console.error('Error fetching featured shows:', error);
      });
  }, []);

  return (
    <div className="featured-show-section">
      <h2 className='featured-show-section-h2'>Featured Shows</h2>
      <div className="show-container">
        {featuredShows.map(show => (
          <ShowCard key={show.id} {...show} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedShowsCategory;
