import React from 'react'
import './Hero.css'
import { assets } from '../../Images/assets'

export default function Hero() {
  return (
    <>
    <div className='hero container' id='home'>
        <div className='heroText'>
            <h1>We Ensure better education for a better world</h1>
            <p>Our cutting-edge curriculm is designed to empower students with the knowledge, skills, and expriences needed to excel in the dynamic field of education</p>
            <button className='btn'>Explore More <img src={assets.dark_arrow} alt="arrow_icon" /></button>        
        </div>
    </div>
    </>
  )
}