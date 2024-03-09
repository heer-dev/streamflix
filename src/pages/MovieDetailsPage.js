import React from 'react'
import MovieDetails from '../components/MovieDetails'
import Header from '../components/Header'
import Footer from '../components/Footer'
const MovieDetailsPage = () => {
  return (
    <div>
      <header>
        <Header/>
      </header>
      <MovieDetails/>
      <footer>
        <Footer/>
      </footer>
    </div>
  )
}

export default MovieDetailsPage
