import React from 'react'
import './Keypad.css';

export default function Keypad() {
  return (
    <>
    <div className='keypad'>
        <div className='keyBox'>
            <button className='key clearExpresson operations'>C</button>
            <button className='key deleteExpression operations'>D</button>
            <button className='key operations'>+/-</button>
            <button className='key operations'>%</button>
            <button className='key'>7</button>
            <button className='key'>8</button>
            <button className='key'>9</button>
            <button className='key operations'>x</button>
            <button className='key'>4</button>
            <button className='key'>5</button>
            <button className='key'>6</button>
            <button className='key operations'>-</button>
            <button className='key'>1</button>
            <button className='key'>2</button>
            <button className='key'>3</button>
            <button className='key operations'>+</button>
            <button className='key'>0</button>
            <button className='key'>.</button>
            <button className='key equal'>=</button>
            <button className='key operations'>/</button>
        </div>
    </div>
    </>
  )
}