import React from 'react'
import "../assets/App.css"
import Header from '../components/Header'
import ShowListing from '../components/ShowListing'
import Footer from '../components/Footer'
const ShowListingPage = () => {
  return (
    <div>
      <header>
        <Header/>
      </header>
      <ShowListing/>
      <footer>
        <Footer/>
      </footer>
    </div>
  )
}

export default ShowListingPage
