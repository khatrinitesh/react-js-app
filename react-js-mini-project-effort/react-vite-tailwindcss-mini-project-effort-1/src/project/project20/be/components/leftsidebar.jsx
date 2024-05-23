import React from 'react';
import { NavLink } from 'react-router-dom';

export default function LeftSidebar() {
  return (
    <div className='sidebar'>
      <ul>
        <li>
            <NavLink to="javascript:void(0)" activeClassName="active">Home</NavLink>
        </li>
        <li>
            <NavLink to="javascript:void(0)" activeClassName="active">About</NavLink>
        </li>
        <li>
            <NavLink to="javascript:void(0)" activeClassName="active">Service</NavLink>
        </li>
        <li>
            <NavLink to="javascript:void(0)" activeClassName="active">Contact</NavLink>
        </li>
      </ul>
    </div>
  )
}
