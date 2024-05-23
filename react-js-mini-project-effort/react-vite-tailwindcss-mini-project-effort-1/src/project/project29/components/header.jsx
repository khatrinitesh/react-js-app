import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function header() {
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if(window.scrollY > 100){
                setIsSticky(true);
            }
            else{
                setIsSticky(false);
            }
        }
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll',handleScroll)
        }
    });

   
  return (
    <header className={isSticky ? 'sticky header' : 'header'}>
        <ul className='m-0 list-unstyled d-flex align-items-center justify-content-center g-2'>
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
    </header>
  )
}
