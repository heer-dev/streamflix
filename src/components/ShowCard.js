import React from 'react';
import '../assets/App.css'; 

const ShowCard = ({ title, image, tag }) => {
  return (
    <div className="show-card">
      <div className="show-image-container">
        <img src={image} alt={title} className="show-image" />
        {tag && <span className="show-tag">{tag}</span>}
      </div>
      <h3 className="show-title">{title}</h3>
    </div>
  );
};

export default ShowCard;
