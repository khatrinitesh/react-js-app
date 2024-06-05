import React from 'react'
import useStore from '../store'
import { Link, NavLink } from 'react-router-dom';

const Navigation = () => {

    const currentPage = useStore((state) => state.currentPage);
    const setCurrentPage = useStore((state) => state.setCurrentPage);
  
    if (!currentPage) {
      return null; // Render nothing if currentPage is undefined
    }
  return (
    <>
     <nav>
      <ul>
        <li>
          <NavLink  to="/" activeClassName="active" onClick={() => setCurrentPage('home')}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink  to="/about" activeClassName="active" onClick={() => setCurrentPage('about')}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" activeClassName="active" onClick={() => setCurrentPage('contact')}>
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
    </>
  )
}

export default Navigation