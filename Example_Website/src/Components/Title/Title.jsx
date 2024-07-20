import React from 'react'
import './Title.css'

export default function Title(props) {
  return (
    <>
    <div className='title'>
        <p>{props.title}</p>
        <h2>{props.subTitle}</h2>
    </div>
    </>
  )
}