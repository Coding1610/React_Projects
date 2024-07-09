import React from 'react'
import './App.css';
import Header from './Header/Header';
import Keypad from './Keypad/Keypad';
import darktheme from './Images/dark-theme.svg';
import lighttheme from './Images/light-theme.svg';

export default function App() {

  return (  
    <>
    <div className='mainContainer' >
      <div className='titleBox'>
        <p className='title'>Calculator</p>
      </div>
        <div className='calContainer'>
            <div className='modeBtn'>
              <img alt="Light-Theme-Btn"src={lighttheme}/>
            </div>
            <Header/>
            <Keypad/>
        </div>
    </div>
    </>
  )
}