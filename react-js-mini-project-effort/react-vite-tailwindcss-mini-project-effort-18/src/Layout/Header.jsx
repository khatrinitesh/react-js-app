import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header className='header'>
      <ul>
        <li>
            <NavLink to="/" className="">Home</NavLink>
        </li>
        <li>
            <NavLink to="/about" className="">About</NavLink>
        </li>
      </ul>
    </header>
  )
}

export default Header
