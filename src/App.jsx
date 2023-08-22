import React, {useState, useEffect} from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom"

import Navbar from './components/Navbar'
import Contact from './components/Contact'
import Home from './pages/Home'
import SignUp from './pages/SignUp'
import Login from './pages/Login'
import { DotLoader } from 'react-spinners'


const App = () => {

  const [loading, setLoading] = useState(false)
  useEffect(() =>{
    setLoading(true)
    setTimeout(() =>{
    setLoading(false)
    }, 3500)
  }, [])

  return (
    <>

<div className='intelligence'>

{loading ?(
  <div className='myloader'>

    <DotLoader
    color={"#fff"}
    loading={loading}
    size={100}
    aria-label="Loading Spinner"
    data-testid="loader"
    />
  </div>
  ):(
      <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='contact' element={<Contact />} />
            <Route path='signup' element={<SignUp/>} />
            <Route path='login' element={<Login/>} />
          </Routes>
      </BrowserRouter>
      )} 
      </div>
    </>
  )
}

export default App