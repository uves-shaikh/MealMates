import './header.css'
import React from 'react'
import mainHeaderImage from '../../assets/headerBanner.jpg'
import HeaderCart from './HeaderCart'

const Header = () => {
  return (
    <>
    <header className='header'>
        <h1>
            Welcome to MealMates
        </h1>
        <HeaderCart />
    </header>
    <div className="main-image">
      <img src={mainHeaderImage} alt="main-header" />
    </div>
    </>
  )
}

export default Header