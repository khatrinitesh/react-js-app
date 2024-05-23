import React, { useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {

    const headerRef = useRef(null);
    useEffect(() => {
        if (headerRef.current) {
            const headerInnerHeight = headerRef.current.clientHeight;
            console.log('Header Inner Height:', headerInnerHeight);
        }
    }, []);

    return (
        <header ref={headerRef} className='bg-black'>
            <ul className='flex'>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about">About</NavLink>
                </li>
                <li>
                    <NavLink to="/service">Service</NavLink>
                </li>
                <li>
                    <NavLink to="/contact">Contact</NavLink>
                </li>
            </ul>
        </header>
    )
}

export default Header
