import React from 'react';
import '../assets/App.css'; 

const MovieCard = ({ name, smallPosterPath, tag }) => {
  return (
    <div className="show-card">
      <div className="show-image-container">
        <img src={smallPosterPath} alt={name} className="show-image" />
        {tag && <span className="show-tag">{tag}</span>}
      </div>
      <h3 className="show-title">{name}</h3>
    </div>
  );
};

export default MovieCard;
