import React from 'react'
import Header from '../components/Header'
import "../assets/App.css"
import HeroSection from '../components/HeroSection'
import FeaturedMoviesCategory from '../components/FeaturedMovieCategory'
import FeaturedShowsCategory from "../components/FeaturedShowsCategory"
import CinemaSpotlight from '../components/CinemaSpotlight';
import ActorSpotlight from '../components/ActorSpotlight';
import Footer from '../components/Footer';

const slides = [
    { imageUrl: "https://i.ebayimg.com/images/g/EWgAAOSwyP5aJeiu/s-l1200.webp", title: 'Slide 1' }, 
    { imageUrl: "https://i0.wp.com/teaser-trailer.com/wp-content/uploads/Triple-Frontier-Banner-Poster.jpg?ssl=1", title: 'Slide 2' },
    { imageUrl: "https://jordantimes.com/sites/default/files/styles/news_inner/public/Hanna.jpg?itok=_z86mSS_", title: 'Slide 3' },
];

const HomePage = () => {

  return (
    <div className='background'>
      
      <Header />
      <HeroSection slides={slides} />
      <FeaturedMoviesCategory />
      <FeaturedShowsCategory />
      <ActorSpotlight/>
      <CinemaSpotlight/>
      <footer>
      <Footer/>
      </footer>
    </div>
  )
}

export default HomePage
