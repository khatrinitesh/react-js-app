import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header className='bg-black p-2'>
      <div className="container mx-auto">
      <ul className='flex'>
        <li>
            <NavLink className="text-white p-2" activeclassname="active" to="/">Home</NavLink>
        </li>
        <li>
            <NavLink className="text-white p-2" activeclassname="active" to="/about">About</NavLink>
        </li>
        <li>
            <NavLink className="text-white p-2" activeclassname="active" to="/service">Service</NavLink>
        </li>
        <li>
            <NavLink className="text-white p-2" activeclassname="active" to="/contact">Contact</NavLink>
        </li>
      </ul>
      </div>
    </header>
  )
}

export default Header
