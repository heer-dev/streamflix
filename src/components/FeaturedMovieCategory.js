import React, { useState, useEffect } from 'react';
import MovieCard from './MovieCard';
import '../assets/App.css'; 

const FeaturedMoviesCategory = () => {
  const [featuredMovies, setFeaturedMovies] = useState([]);

  
  useEffect(() => {
    fetch('http://localhost:4000/featuredMovies')
      .then(response => response.json())
      .then(data => setFeaturedMovies(data))
      .catch(error => {
        console.error('Error fetching featured movies:', error);
      });
  }, []);

  return (
    <div className="featured-movies-section">
      <h2 className='featured-movies-section-h2'>Featured Movies</h2>
      <div className="movies-container" >
        {featuredMovies.map(movie => (
          <MovieCard key={movie.id} {...movie} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedMoviesCategory;
