import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <div className='container'>
        <div className='d-flex justify-content-between p-3'>
          <ul className='list-unstyled d-flex'>
            <li>
                <NavLink to="/" className="me-2" activeClassName="active">Home</NavLink>
            </li>
            <li>
                <NavLink to="/about" className="me-2" activeClassName="active">About</NavLink>
            </li>
            <li>
                <NavLink to="/contact" className="me-2" activeClassName="active">Contact</NavLink>
            </li>
          </ul>
          <ul className='list-unstyled d-flex'>
              <li>
                <NavLink to="/login" activeClassName="active">Login</NavLink>
              </li>
          </ul>
        </div>
      </div>
    </header>
  )
}
