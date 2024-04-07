import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import LogIn from '../components/LogIn'

const LoginPage = () => {
  return (
    <div>
      <header>
        <Header/>
      </header>
      <LogIn/>
      <footer>
        <Footer/>
      </footer>
    </div>
  )
}

export default LoginPage
