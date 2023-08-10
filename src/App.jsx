import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import Navbar from './components/Navbar'
import Introduction from './components/Introduction'
import Whychooseus from './components/Whychooseus'
import Whoarewe from './components/Whoarewe'
import Footer from './components/Footer'
import Workers from './components/Workers'
import Contact from './components/Contact'

const App = () => {
  return (
   <>
   <Navbar/>
   <Introduction/>
   <Whychooseus/>
   <Whoarewe/>
   <Workers/>
   <Contact/>
   <Footer/>

   </>
  )
}

export default App