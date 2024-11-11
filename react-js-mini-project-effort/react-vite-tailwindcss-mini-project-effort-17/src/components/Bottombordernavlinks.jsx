import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

const Bottombordernavlinks = () => {
  return (
    <>
       <nav className="bg-black p-4">
      <ul className="flex justify-center space-x-6">
        <li>
          <NavItem to="/" label="Home" />
        </li>
        <li>
          <NavItem to="/about" label="About" />
        </li>
        <li>
          <NavItem to="/services" label="Services" />
        </li>
        <li>
          <NavItem to="/contact" label="Contact" />
        </li>
      </ul>
    </nav>
    </>
  );
}

export default Bottombordernavlinks;


const Navbar = () => {
    return (
      <nav className="bg-black p-4">
        <ul className="flex justify-center space-x-6">
          <li>
            <NavItem to="/" label="Home" />
          </li>
          <li>
            <NavItem to="/about" label="About" />
          </li>
          <li>
            <NavItem to="/services" label="Services" />
          </li>
          <li>
            <NavItem to="/contact" label="Contact" />
          </li>
        </ul>
      </nav>
    );
  };

  const NavItem = ({ to, label }) => {
    return (
      <motion.div
        whileHover={{
          scale: 1.1,
          transition: { duration: 0.3 },
        }}
        whileTap={{
          scale: 0.95,
          transition: { duration: 0.2 },
        }}
      >
        <NavLink
          to={to}
          className="relative text-white font-bold"
          activeClassName="text-yellow-500" // Active link color
        >
          {label}
          <motion.div
            className="absolute bottom-0 left-0 w-full h-[2px] bg-transparent"
            initial={{ width: 0 }}
            whileHover={{
              width: '100%',
              backgroundColor: '#f39c12', // Color of the border when hovered
              transition: { duration: 0.3 },
            }}
            transition={{ duration: 0.3 }}
          />
        </NavLink>
      </motion.div>
    );
  };
  
