import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Story from './components/Story'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Contact from './components/Contact'
import Features from './components/Features'

export default function App() {
  return (
    <>
    <main className='relative min-h-screen w-screen overflow-x-hidden'>
      <Navbar/>
      <Hero/>
      <About/>
      <Features/>
      <Story/>
      <Contact/>
      <Footer/>
    </main>
    </>
  )
}