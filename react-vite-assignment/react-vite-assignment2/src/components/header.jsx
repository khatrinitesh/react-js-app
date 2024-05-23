import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <ul>
        <li>
            <NavLink to="/" activeClassName="active">Home</NavLink>
        </li>
        <li>
            <NavLink to="/about" activeClassName="active">About</NavLink>
        </li>
        <li>
            <NavLink to="/servicelist" activeClassName="active">Service</NavLink>
        </li>
        <li>
            <NavLink to="/contact" activeClassName="active">Contact</NavLink>
        </li>
      </ul>
    </header>
  )
}

export default Header
