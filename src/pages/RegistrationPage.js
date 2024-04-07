import React from 'react'
import Header from "../components/Header"
import Footer from '../components/Footer'
import Registration from '../components/Registration'

const RegistrationPage = () => {
  return (
    <div>
      <header>
        <Header/>
      </header>
      <Registration/>
      <footer>
        <Footer/>
      </footer>
    </div>
  )
}

export default RegistrationPage
