"use client"

import React from 'react'
import About from './About'
import Skills from './Skills'
import Header from './Header'
import Projects from './Projects'
import Contact from './Contact'
import Footer from './Footer'

const Home: React.FC = () => {
  return (
    <div>
      
      <About />
      <Skills />
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default Home
