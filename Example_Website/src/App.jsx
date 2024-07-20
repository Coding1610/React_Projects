import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Testimonials from './Components/Tesimonials/Testimonials'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import Video from './Components/Video/Video'
import { useState } from 'react'

export default function App() {

  const [playVideo,setPlayVideo] = useState(false);

  return (
    <>
    <Navbar/>
    <Hero/>
    <div className='container'>
      <Title title="OUR PROGRAMS" subTitle="What We Offer"/>
      <Programs/>
      <About setPlayVideo={setPlayVideo}/>
      <Title title="GALLERY" subTitle="Campus Photos"/>
      <Campus/>
      <Title title="TESTIMONIALS" subTitle="What Student Says"/>
      <Testimonials/>
      <Title title="CONTACT US" subTitle="Get in Touch"/>
      <Contact/>
      <Footer/>
      </div>
      <Video playVideo={playVideo} setPlayVideo={setPlayVideo}/>
    </>
  )
}