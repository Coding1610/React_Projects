import React, { useContext } from 'react'
import { assets } from '../../Images/assets'
import { Context } from '../../Context/Context';
import './Main.css'

export default function Main() {

    const {onSent,recentPrompt,showResult,loading,resultData,setInput,input} = useContext(Context);

    return (
    <>
    <div className='main'>

        <div className='nav'>
            <p>Gemini</p>
            <img src={assets.user_icon} alt="user_icon" className='w-[35px] cursor-pointer'/>
        </div>

        <div className='mainContainer'>

            { !showResult ? 

            <>
            <div className='greet'>
                <p><span>Hello, USER</span></p>
                <p>How can I help you today ? </p>
            </div>

            <div className='cards'>

                <div className='card'>
                    <p>Suggest beautiful places to see on upcoming road trip.</p>
                    <img src={assets.compass_icon} alt="compass_icon" />
                </div>

                <div className='card'>
                    <p>Briefly summarize this concept : urban plannig.</p>
                    <img src={assets.bulb_icon} alt="bulb_icon" />
                </div>

                <div className='card'>
                    <p>Brainstrom team bonding activities for our work retreat.</p>
                    <img src={assets.message_icon} alt="message_icon" />
                </div>

                <div className='card'>
                    <p>Improve the readability of the following code.</p>
                    <img src={assets.code_icon} alt="code_icon" />
                </div>

            </div> 
            </> 
            :
            <>
            <div className='result'>
                <div className='resultTitle'>
                    <img className='w-[35px]' src={assets.user_icon} alt="user_icon" />
                    <p>{recentPrompt}</p>
                </div>
                <div className='resultData'>
                    <img className='w-[40px] rounded-full' src={assets.gemini_icon} alt="gemini_icon" />
                    {loading ? 
                    <>
                    <div className='loader'>
                        <hr />
                        <hr />
                        <hr />
                    </div>
                    </>:<p dangerouslySetInnerHTML={{__html:resultData}}></p>}
                </div>
            </div>
            </> 
            }

            <div className='mainBottom'>

                <div className='searchBox'>
                    <input onChange={(e) => setInput(e.target.value)} value={input} type="text" name="" id="" placeholder='Enter a prompt here'/>
                    <div className='inputImg'>
                        <img src={assets.gallery_icon} alt="gallery_icon" />
                        <img src={assets.mic_icon} alt="mic_icon" />
                        {input?<img onClick={() => onSent()} src={assets.send_icon} alt="send_icon" />:null}
                    </div>
                </div>

                <p className='bottomInfo'>Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy and Gemini Apps</p>

            </div>

        </div>

    </div>
    </>
  )
}