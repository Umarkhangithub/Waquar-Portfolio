import React from 'react'
import {Link, NavLink, useLocation } from 'react-router-dom'

import Resume from '../../assets/Resume.pdf'

const Header = () => {
  const location = useLocation()
  return (
    <div className="navbar bg-base-100 shadow-lg bg-transparent border-b-2 border-orange-600 fixed top-0 backdrop-blur-sm z-50">
    <div className="navbar-start">
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16" />
          </svg>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
          <li className='  '><NavLink to='/' className={({isActive}) => isActive ? ' bg-orange-500 text-white' : ''}>Home</NavLink></li>
        <li><NavLink to='/about'className={({isActive}) => isActive ? ' bg-orange-500 text-white' : ''}>About</NavLink></li>
        <li><NavLink to='/project' className={({isActive}) => isActive ? ' bg-orange-500 text-white' : ''}>Project</NavLink></li>
        <li><NavLink to='/contact' className={({isActive}) => isActive ? ' bg-orange-500 text-white' : ''}>Contact Us</NavLink></li>
        </ul>
      </div>
      <a className="btn btn-ghost text-2xl pl-10 text-white">Waquar <span className='text-orange-600'>Ahmad</span></a>
    </div>
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1">
        <li className='  '><NavLink to='/' className={({isActive}) => isActive ? ' bg-orange-500 text-white' : ''}>Home</NavLink></li>
        <li><NavLink to='/about'className={({isActive}) => isActive ? ' bg-orange-500 text-white' : ''}>About</NavLink></li>
        <li><NavLink to='/project' className={({isActive}) => isActive ? ' bg-orange-500 text-white' : ''}>Project</NavLink></li>
        <li><NavLink to='/contact' className={({isActive}) => isActive ? ' bg-orange-500 text-white' : ''}>Contact Us</NavLink></li>
      </ul>
    </div>
    <div className="navbar-end">
      <Link hrefLang='en' to={Resume} download='Waquar_Ahmad_Resume.pdf' target='_blank' 
        
        className= 'btn mr-10 bg-orange-500 text-white'>Resume Download</Link>
    </div>
  </div>    
  )
}

export default Header
