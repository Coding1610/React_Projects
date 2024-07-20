import React from 'react'
import './Programs.css'
import { assets } from '../../Images/assets'

export default function Programs() {
  return (
    <>
    <div className='programs'>
        <div className='program'>
            <img src={assets.program_1} alt="program_1_img" />
            <div className='caption'>
                <img src={assets.program_1_icon} alt="program_1_icon" />
                <p>Graduation Degree</p>
            </div>
        </div>
        <div className='program'>
            <img src={assets.program_2} alt="program_2_img" />
            <div className='caption'>
                <img src={assets.program_2_icon} alt="program_2_icon" />
                <p>Master Degree</p>
            </div>
        </div>
        <div className='program'>
            <img src={assets.program_3} alt="program_3_img" />
            <div className='caption'>
                <img src={assets.program_3_icon} alt="program_3_icon" />
                <p>Post Graduation</p>
            </div>
        </div>
    </div>
    </>
    )
}