import React,{useState} from 'react';
import { NavLink } from 'react-router-dom';

export default function LeftSidebar({toggle,leftsidebar}) {
  return (
    <>
      <button className='btnMenu' onClick={toggle}>&#9776;</button>
      {leftsidebar && (<div className='sidebar'>
        <button onClick={btnClose}>&times;</button>
        <ul>
            <li>
                <NavLink to="/" activeClassName="active">Home</NavLink>
            </li>
            <li>
                <NavLink to="/" activeClassName="active">About</NavLink>
            </li>
            <li>
                <NavLink to="/" activeClassName="active">Service</NavLink>
            </li>
            <li>
                <NavLink to="/" activeClassName="active">Contact</NavLink>
            </li>
        </ul>
      </div>)}
      
    </>
  )
}
