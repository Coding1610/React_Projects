import React, { useState } from 'react'
import './Sidebar.css'
import { assets } from '../../Images/assets'

export default function Sidebar() {

    const [extended,setextended] = useState(false);

  return (
    <>
    <div className='sidebar'>

        <div className='topDiv'>

            <img onClick={() => setextended(prev=>!prev)} className='menu' src={assets.menu_icon} alt="menu_icon" />

            <div className='newChat'>
                <img src={assets.plus_icon} alt="plus_icon" />
                {extended ? <p>New Chat</p> : null}
            </div>

            {extended ? 
            <div className='recent'>
                <p className='recentTitle'>Recent</p>
                <div className='recentEntry'>
                    <img src={assets.message_icon} alt="message_icon" />
                    <p>What is React ...</p>
                </div>
            </div>
            : null}   

        </div>

        <div className='bottomDiv'>

            <div className='bottomItems recentEntry'>
                <img src={assets.question_icon} alt="question_icon" />
                {extended ? <p>Help</p> : null}
            </div>

            <div className='bottomItems recentEntry'>
                <img src={assets.history_icon} alt="history_icon" />
                {extended ? <p>Activity</p> : null}
            </div>

            <div className='bottomItems recentEntry'>
                <img src={assets.setting_icon} alt="setting_icon" />
                {extended ? <p>Settings</p> : null}
            </div>

        </div>

    </div>
    </>
  )
}