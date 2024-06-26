import React from 'react';
import {NavLink} from 'react-router-dom';

export default function Sidebar() {
  return (
    <div className='sidebar'>
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
    </div>
  )
}
