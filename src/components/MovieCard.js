import React from 'react';
import '../assets/App.css'; 

const MovieCard = ({ title, image, tag }) => {
  return (
    <div className="movie-card">
      <div className="movie-image-container">
        <img src={image} alt={title} className="movie-image" />
        {tag && <span className="movie-tag">{tag}</span>}
      </div>
      <h3 className="movie-title">{title}</h3>
    </div>
  );
};

export default MovieCard;
