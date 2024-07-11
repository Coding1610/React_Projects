import React from 'react'
import './Keypad.css';

export default function Keypad(props) {

  return (
    <>
    <div className='keypad'>
        <div className='keyBox'>
          {props.keys.map((item,index) => <button className='key' key={index} onClick={props.handleKeys} value={item.value} id={item.keyCode}>{item.value}</button> )}
        </div>
    </div>
    </>
  )
}