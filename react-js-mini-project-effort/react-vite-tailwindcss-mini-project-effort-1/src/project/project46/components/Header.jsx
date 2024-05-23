import React from 'react';
import {NavLink } from 'react-router-dom';

const Header = () => {
    const navLink = [
        {link:'/',text:'Home'},
        {link:'/about',text:'About'},
        {link:'/contact',text:'Contact'},
    ]
  return (
    <>
      <nav className='p-[10px] bg-[black]'>
            <ul className='flex'>
              {navLink.map((val,index) => {
                const {link,text} = val;
                return(
                    <li>
                        <NavLink activeClassName="active" className="text-white p-[10px]" key={index} to={link}>{text}</NavLink>
                    </li>
                )
              })}
            </ul>
        </nav>
    </>
  )
}

export default Header
