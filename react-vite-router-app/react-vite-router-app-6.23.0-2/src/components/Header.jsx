import React from 'react'
import {Link, NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header className='bg-black text-white p-[20px] justify-between flex'>
      <Link to="/">
        Logo
      </Link>
      <ul className='flex gap-5'>
        <li>
          <NavLink to="/" activeclassname="active" className="text-white p-[10px]">Home</NavLink>
        </li>
        <li>
          <NavLink to="about" activeclassname="active" className="text-white p-[10px]">About</NavLink>
        </li>
        <li>
          <NavLink to="service" activeclassname="active" className="text-white p-[10px]">Service</NavLink>
        </li>
        <li>
          <NavLink to="contact" activeclassname="active" className="text-white p-[10px]">Contact</NavLink>
        </li>
      </ul>
    </header>
  )
}

export default Header