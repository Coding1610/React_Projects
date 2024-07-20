import React, { useRef } from 'react'
import './Testimonials.css'
import { assets } from '../../Images/assets'

export default function Testimonials() {

    const ulRef = useRef();
    let tx = 0;

    const slideForward = () => {
        if( tx > -50 ){
            tx -= 25;
        }
        ulRef.current.style.transform = `translateX(${tx}%)`;
    };

    const slideBackward = () => {
        if( tx < 0 ){
            tx += 25;
        }
        ulRef.current.style.transform = `translateX(${tx}%)`;
    };

  return (
    <div className='testimonials'>
        <img src={assets.next_icon} alt="next_icon" className='nextBtn' onClick={slideForward} />
        <img src={assets.back_icon} alt="back_icon" className='backBtn' onClick={slideBackward} />
        <div className='slider'>
            <ul ref={ulRef}>
                <li>
                    <div className='slide'>
                        <div className='userInfo'>
                            <img src={assets.user_1_icon} alt="user_img" />
                            <div>
                                <h3>Emily Williams</h3>
                                <span>Edusity, USA</span>
                            </div>
                        </div>
                        <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
                    </div>
                </li>

                <li>
                    <div className='slide'>
                        <div className='userInfo'>
                            <img src={assets.user_2_icon} alt="user_img" />
                            <div>
                                <h3>Williams Jackson</h3>
                                <span>Edusity, USA</span>
                            </div>
                        </div>
                        <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
                    </div>
                </li>

                <li>
                    <div className='slide'>
                        <div className='userInfo'>
                            <img src={assets.user_3_icon} alt="user_img" />
                            <div>
                                <h3>Emily Williams</h3>
                                <span>Edusity, USA</span>
                            </div>
                        </div>
                        <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
                    </div>
                </li>

                <li>
                    <div className='slide'>
                        <div className='userInfo'>
                            <img src={assets.user_4_icon} alt="user_img" />
                            <div>
                                <h3>Emily Williams</h3>
                                <span>Edusity, USA</span>
                            </div>
                        </div>
                        <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}