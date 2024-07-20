import React from 'react'
import './Campus.css'
import { assets } from '../../Images/assets'

export default function Campus() {
  return (
    <>
    <div className='campus'>
        <div className='gallery'>
            <img src={assets.gallery_1} alt="campus_img_1" />
            <img src={assets.gallery_2} alt="campus_img_2" />
            <img src={assets.gallery_3} alt="campus_img_3" />
            <img src={assets.gallery_4} alt="campus_img_4" />
        </div>

        <button className='btn darkBtn'>See more here <img src={assets.white_arrow_icon} alt="arroow_img" /></button>
    </div>
    </>
  )
}