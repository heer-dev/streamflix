import React from 'react'
import ShowDetails from '../components/ShowDetails'
import Header from '../components/Header'
import Footer from '../components/Footer'
const ShowDetailsPage = () => {
  return (
    <div>
      <header>
      <Header/>
      </header>
      <ShowDetails/>
      <footer>
        <Footer/>
      </footer>
    </div>
  )
}

export default ShowDetailsPage
