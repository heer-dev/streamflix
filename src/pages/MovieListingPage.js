import React from 'react'
import MovieListing from '../components/MovieListing'
import Header from '../components/Header'
import Footer from '../components/Footer'
const ListingPage = () => {
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

export default ListingPage
