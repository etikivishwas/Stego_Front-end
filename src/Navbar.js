import React from 'react'
import { Link } from 'react-router-dom'
import logo from './logo1.png'
import './navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
         <div className='logo'>
                <img src={logo} alt='logo' className='logo-img' ></img>
         </div>
         
         <div className='items'>
                  <ul>
                           <li>
                                    <Link to='/home'>HOME</Link>
                           </li>
                           <li>
                                    <Link to='/encode'>ENCODE</Link>
                           </li>
                           <li>
                                    <Link to='/decode'>DECODE</Link>
                           </li>
                           {/* <li>
                                    <Link to='/detect'>DETECT</Link>
                           </li> */}
                           <li>
                                    <Link to='/about'>ABOUT US!</Link>
                           </li>

                  </ul>

         </div>

    </div>
  )
}

export default Navbar