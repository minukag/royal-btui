import { useState } from 'react'
import { gsap } from "gsap"

import Navbar from './components/navbar'
import Footer from './components/footer'
import { Outlet } from 'react-router'

import "./index.scss"

function App() {

  return (
    <>
    <Navbar />
    <Outlet />
    <Footer />
    </>
  )
}

export default App
