<<<<<<< HEAD
import React from 'react'
import { NavLink } from 'react-router-dom'
=======
import React from 'react';
import { NavLink } from 'react-router-dom';
>>>>>>> 45b4f2811a84fbd978bb3fc1ec1952c2f3e513d9

export default function Header() {
  return (
    <header>
<<<<<<< HEAD
        <ul>
            <li>
                <NavLink to="/" className="active">Home</NavLink>
            </li>
            <li>
                <NavLink to="/about" className="active">About</NavLink>
            </li>
            <li>
                <NavLink to="/service" className="active">Service</NavLink>
            </li>
            <li>
                <NavLink to="/contact" className="active">Contact</NavLink>
            </li>
        </ul>
=======
      <ul>
        <li>
            <NavLink to="/" activeClassName="active">Home</NavLink>
        </li>
        <li>
            <NavLink to="/about" activeClassName="active">About</NavLink>
        </li>
        <li>
            <NavLink to="/service" activeClassName="active">Service</NavLink>
        </li>
        <li>
            <NavLink to="/contact" activeClassName="active">Contact</NavLink>
        </li>
      </ul>
>>>>>>> 45b4f2811a84fbd978bb3fc1ec1952c2f3e513d9
    </header>
  )
}
