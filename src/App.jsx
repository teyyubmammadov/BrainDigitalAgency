import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from './components/Navbar'
import Introduction from './components/Introduction'
import Whychooseus from './components/Whychooseus'
import Whoarewe from './components/Whoarewe'
import Footer from './components/Footer'
import Workers from './components/Workers'
import Contact from './components/Contact'
import Home from './pages/Home'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='contact' element={<Contact />} />
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App