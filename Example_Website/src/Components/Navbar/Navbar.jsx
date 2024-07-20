import React, { useEffect, useState } from 'react'
import './Navbar.css'
import { Link } from 'react-scroll' 
import { assets } from '../../Images/assets'

export default function Navbar() {

  const [sticky,setSticky] = useState(false);

  useEffect( () => {
    window.addEventListener('scroll' , () => {
      window.scrollY > 500 ? setSticky(true) : setSticky(false);
    })
  },[]);

  const [menu,setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu( prev => !prev );
  }

  return (
    <>
    <nav className={`container ${sticky ? 'darkNav' : ''}`}>
      <img src={assets.logo_icon} alt="website_icon" className='logo'/>
      <ul className={menu ? '' : 'mobileView'}>
        <li><Link to="hero" smooth={true} offset={0} duration={500} spy={true} >Home</Link></li>
        <li><Link to="program" smooth={true} offset={-260} duration={500} spy={true} >Program</Link></li>
        <li><Link to="about" smooth={true} offset={-150} duration={500} spy={true} >About us</Link></li>
        <li><Link to="campus" smooth={true} offset={-260} duration={500} spy={true} >Campus</Link></li>
        <li><Link to="testimonials" smooth={true} offset={-260} duration={500} spy={true} >Testimonials</Link></li>
        <li><Link to="contact" smooth={true} offset={-260} duration={500} spy={true}  className='btn'>Contact Us</Link></li>     
      </ul>
      <img src={assets.menu_icon} alt="menu_icon" className='menuBtn' onClick={toggleMenu}/>
    </nav>
    </>
  )
}