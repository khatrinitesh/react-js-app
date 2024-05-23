import React from 'react';
import { NavLink ,useLocation} from 'react-router-dom';
import Sidebar from './Sidebar';

export default function Header() {

    const location = useLocation();
  return (
    <header>
      <ul>
        <li><NavLink to="/" activeClassName="active">Home</NavLink></li>
        <li><NavLink to="/about" activeClassName="active">About</NavLink></li>
        <li><NavLink to="/contact" activeClassName="active">Contact</NavLink></li>
      </ul>

      {(location.pathname === '/' || location.pathname === '/about') && (<Sidebar/>)}
    </header>
  )
}
