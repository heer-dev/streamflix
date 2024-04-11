import React, { useState, useEffect } from 'react';
import MovieCard from './MovieCard';
import '../assets/App.css';

const FeaturedMoviesCategory = () => {
  const [featuredMovies, setFeaturedMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchFeaturedMovies = async () => {
      setIsLoading(true);
      try {
        const response = await fetch("http://localhost:8080/media/featured?type=movies");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setFeaturedMovies(data);
      } catch (error) {
        console.error('Error fetching featured movies:', error);
        setError('Failed to fetch featured movies');
      } finally {
        setIsLoading(false);
      }
    };
  
    fetchFeaturedMovies();
  }, []);

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  if (isLoading) {
    return <div className="loading-message">Loading...</div>;
  }
  
  return (
    <div className="featured-movies-section">
      <h2 className='featured-movies-section-h2'>Featured Movies</h2>
      <div className="movies-container">
        {featuredMovies.length > 0 ? (
          featuredMovies.map(movie => (
            <MovieCard key={movie.id} {...movie} />
          ))
        ) : (
          <div>No featured movies available.</div>
        )}
      </div>
    </div>
  );
};

export default FeaturedMoviesCategory;
