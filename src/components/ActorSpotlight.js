import React from 'react';
import '../assets/App.css'; 

const ActorSpotlight = () => {
  const actors = [
    { name: 'Tom Cruise', image: 'actor1.jpeg' },
    { name: 'Scarlett Johansson', image: 'actor2.jpg' },
    { name: 'Angelina Jolie', image: 'actor3.jpg' },
    { name: 'Denzel Washington', image: 'actor4.jpeg' },
    { name: 'Leonardo DiCaprio', image: 'actor5.webp' }
    
  ];

  return (
    <div className="actor-spotlight-section">
      <h2>ACTOR'S SPOTLIGHT</h2>
      <div className="actors-container">
        {actors.map((actor, index) => (
          <div key={index} className="actor">
            <img src={require(`../assets/images/${actor.image}`)} alt={actor.name} />
            <p>{actor.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActorSpotlight;