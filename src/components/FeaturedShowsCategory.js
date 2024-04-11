import React, { useState, useEffect } from 'react';
import ShowCard from './ShowCard';
import '../assets/App.css';

const FeaturedShowsCategory = () => {
  const [featuredShows, setFeaturedShows] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchFeaturedShows = async () => {
      setIsLoading(true);
      try {
        const response = await fetch("https://streamflic-backend-827287f6aade.herokuapp.com/media/featured?type=tvshows");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setFeaturedShows(data);
      } catch (error) {
        console.error('Error fetching featured TV shows:', error);
        setError('Failed to fetch featured TV shows');
      } finally {
        setIsLoading(false);
      }
    };

    fetchFeaturedShows();
  }, []);

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  if (isLoading) {
    return <div className="loading-message">Loading...</div>;
  }

  return (
    <div className="featured-show-section">
      <h2 className='featured-show-section-h2'>Featured TV Shows</h2>
      <div className="show-container">
        {featuredShows.length > 0 ? (
          featuredShows.map(show => (
            <ShowCard key={show.id} {...show} />
          ))
        ) : (
          <div>No featured TV shows available.</div>
        )}
      </div>
    </div>
  );
};

export default FeaturedShowsCategory;
