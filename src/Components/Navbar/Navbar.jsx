import React from 'react'
import logo from '../../assets/logo.png';
import './Navbar.css'

const Navbar = () => {
  return (
    <>
    <div className="navbar">
        <div className='navbar-left'> 
            <img src={logo} alt="navbar-logo" className="navbar-logo" />
            <h1>HoloVision.io</h1>
        </div>
    
    <div className='navbar-right'>
        <ul className="nav-menu">
            <li className="nav-menu-item">Home</li>
            <li className="nav-menu-item">About Us</li>
            <li className="nav-menu-item">Mission</li>
            <li className="nav-menu-item">Contact</li>
        </ul>
    </div>
    </div>
    </>
  )
}

export default Navbar