import React, { useState, useEffect } from 'react';
import "../assets/App.css"; 

const HeroSection = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
    }, 3000); 

    return () => clearInterval(interval);
  }, [currentSlide, slides.length]);

  return (
    <div className="hero-section">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={index === currentSlide ? 'slide active' : 'slide'}
        >
          <img src={slide.imageUrl} alt={slide.title} />
        </div>
      ))}
    </div>
  );
};

export default HeroSection;
