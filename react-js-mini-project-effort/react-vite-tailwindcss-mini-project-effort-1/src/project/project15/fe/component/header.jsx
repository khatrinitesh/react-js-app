import React from 'react';
import {NavLink} from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <ul>
        <li>
            <NavLink to="/fe" activeClassName="active">Home</NavLink>
        </li>
        <li>
            <NavLink to="/fe/about" activeClassName="active">About</NavLink>
        </li>
        <li>
            <NavLink to="/fe/service" activeClassName="active">Service</NavLink>
        </li>
        <li>
            <NavLink to="/fe/contact" activeClassName="active">Contact</NavLink>
        </li>
      </ul>
    </header>
  )
}
