import React from 'react'
// library
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header className='header bg-black'>
        <div className="container mx-auto">
            <ul className='flex listNav'>
                <li>
                    <NavLink to="/" className="block p-2 text-white" activeclassname='active'>Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about" className="block p-2 text-white" activeclassname='active'>About</NavLink>
                </li>
                <li>
                    <NavLink to="/service" className="block p-2 text-white" activeclassname='active'>Service</NavLink>
                </li>
                <li>
                    <NavLink to="/contact" className="block p-2 text-white" activeclassname='active'>Contact</NavLink>
                </li>
            </ul>
        </div>
    </header>
  )
}

export default Header