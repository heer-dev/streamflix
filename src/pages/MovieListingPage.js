import React from 'react'
import MovieListing from '../components/MovieListing'
import Header from '../components/Header'
import Footer from '../components/Footer'
const MovieListingPage = () => {
  return (
    <div>
      <header>
        <Header/>
      </header>
      <MovieListing/>
      <footer>
        <Footer/>
      </footer>
    </div>
  )
}

export default MovieListingPage
