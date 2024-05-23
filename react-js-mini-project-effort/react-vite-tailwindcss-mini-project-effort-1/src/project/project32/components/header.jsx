import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header>
        <ul>
            <li>
                <NavLink to="">Home</NavLink>
            </li>
            <li>
                <NavLink to="/about">About</NavLink>
            </li>
            <li>
                <NavLink to="/service">Service</NavLink>
            </li>
            <li>
                <NavLink to="/contact">Contact</NavLink>
            </li>
            <li>
                <NavLink to="/user/:userid">User</NavLink>
            </li>
            <li>
                <NavLink to="/github">Github</NavLink>
            </li>
        </ul>
    </header>
  )
}
