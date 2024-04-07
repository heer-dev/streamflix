import React from 'react'
import ShowDetails from '../components/ShowDetails'
import Header from '../components/Header'
import { useParams } from 'react-router-dom';
import Footer from '../components/Footer'
const ShowDetailsPage = () => {
  const { id } = useParams(); 
  console.log("ShowDetailsPage ID: "+id); 
  return (
    <div>
      <header>
      <Header/>
      </header>
      <ShowDetails id={id}/>
      <footer>
        <Footer/>
      </footer>
    </div>
  )
}

export default ShowDetailsPage
