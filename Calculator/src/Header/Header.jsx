import React, { useEffect , useRef } from 'react'
import './Header.css'

export default function Header(props) {

  const resultRef = useRef();
  const expressionRef = useRef();

  useEffect( () => {
  resultRef.current.scrollIntoView();
  },[props.expression,props.history]);

  useEffect( () => {
    expressionRef.current.scrollLeft = expressionRef.current.scrollWidth;
  },[props.expression]);

  return (
    <>
    <div className='header customScroll'>
        <div className='headerHistory customScroll'>
          { props.history && props.history.map((item,index) => <p className='historyP' key={index+Math.random()*12}>{item}</p>)}
        </div>
        <div ref={expressionRef} className='headerInput customScroll'>
            <p>{props.expression}</p>
        </div>
        <p ref={resultRef} className='headerResult'>{props.result}</p>
    </div>
    </>
  )
}