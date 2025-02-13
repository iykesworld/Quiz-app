import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './component/navBar/Navbar'
import Footer from './component/footer/Footer'

const App = () => {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default App