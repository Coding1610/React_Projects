import React from 'react'
import './Header.css'

export default function Header() {
  return (
    <>
    <div className='header customScroll'>
        <div className='headerHistory customScroll'>
          <p>History</p>
        </div>
        <div className='headerInput customScroll'>
            <p>Expression</p>
        </div>
        <p className='headerResult'> Result</p>
    </div>
    </>
  )
}