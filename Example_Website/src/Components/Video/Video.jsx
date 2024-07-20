import React, { useRef } from 'react'
import './Video.css'
import { assets } from '../../Images/assets'

const Video = ({playVideo,setPlayVideo}) => {

  const divRef = useRef(null);

  const closeVideo = (e) => {
    if( e.target === divRef.current ){
      setPlayVideo(false);
    }
    else{
      
    }
  };

  return (
    <div onClick={closeVideo} ref={divRef} className={`videoPlayer ${playVideo ? '' : 'hide'}`}>
        <video src={assets.video} autoPlay muted controls></video>
    </div>
  )
}

export default Video;