import React from 'react';
import '../assets/App.css'; 

const CinemaSpotlight = () => {
  const movies = [
    { title: 'Star Voyagers', image: 'spotlight1.webp' },
    { title: 'The Last Kingdom', image: 'spotlight2.jpg' },
    { title: 'The Quest of Quill', image: 'spotlight3.jpg' },
    { title: 'Shadows of the Past', image: 'spotlight4.jpg' },
    { title: 'Turning Point', image: 'spotlight5.jpg' }
  ];

  return (
    <div className="cinema-spotlight-section">
      <h2>CINEMA SPOTLIGHT</h2>
      <div className="cinema-container">
        {movies.map((movie, index) => (
          <div key={index} className="cinema">
            <img src={require(`../assets/images/${movie.image}`)} alt={movie.title} />
            <p>{movie.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CinemaSpotlight;