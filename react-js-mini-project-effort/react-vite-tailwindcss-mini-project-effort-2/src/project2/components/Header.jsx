import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header className='bg-gradient-to-r from-purple-600   to-blue-600'>
      <div className='container mx-auto'>
        <ul className='flex primary font-poppins'>
          <li>
              <NavLink to="/" activeClassName="active font-poppins">Home</NavLink>
          </li>
          <li>
              <NavLink to="/about" activeClassName="active">About</NavLink>
          </li>
          <li>
            <NavLink to="/product/:id" activeClassName="active">Product</NavLink>
          </li>
          <li>
              <NavLink to="/contact" activeClassName="active">Contact</NavLink>
          </li>
        </ul>
      </div>
    </header>
  )
}
