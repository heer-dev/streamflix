import React from 'react'
import MovieDetails from '../components/MovieDetails'
import Header from '../components/Header'
import { useParams } from 'react-router-dom';
import Footer from '../components/Footer'


const MovieDetailsPage = () => {
    const { id } = useParams(); 
    console.log("MovieDetailsPage ID: "+id); 
  return (
    <div>
      <header>
        <Header/>
      </header>
      
      <MovieDetails id={id}/>
      <footer>
        <Footer/>
      </footer>
    </div>
  )
}

export default MovieDetailsPage
