import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className='bg-black py-[20px] header'>
      <div className="container mx-auto">
        <ul className='flex gap-[10px]'>
            <li>
                <NavLink className="text-white font-bold" to="/">Home</NavLink>
            </li>
            <li>
                <NavLink className="text-white font-bold" to="/about">About</NavLink>
            </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
