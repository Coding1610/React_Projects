import React, { useContext, useEffect, useState } from 'react'
import './Sidebar.css'
import { assets } from '../../Images/assets'
import { Context } from '../../Context/Context';

export default function Sidebar() {

    const [extended,setextended] = useState(false);

    const {onSent,previousPrompt,setRecentPrompt,newChat} = useContext(Context);

    const loadPrompt = async (prompt) => {
        setRecentPrompt(prompt);
        await onSent(prompt);
    };

    useEffect( () => {
        localStorage.setItem("recent-history",JSON.stringify(previousPrompt));
    },[previousPrompt]);

  return (
    <>
    <div className='sidebar'>

        <div className='topDiv'>

            <img onClick={() => setextended(prev=>!prev)} className='menu' src={assets.menu_icon} alt="menu_icon" />

            <div className='newChat' onClick={() => newChat()}>
                <img src={assets.plus_icon} alt="plus_icon" />
                {extended ? <p>New Chat</p> : null}
            </div>

            {extended ? 
            <div className='recent'>
                <p className='recentTitle'>Recent</p>
                {previousPrompt.map((item,index) => {
                    return(
                        <div className='recentEntry' onClick={() => loadPrompt(item)} key={index+Math.random()*3}>
                            <img src={assets.message_icon} alt="message_icon" />
                            <p>{item.slice(0,18)}...</p>
                        </div>
                    )} )}
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