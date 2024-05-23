import React from 'react';
import {NavLink} from 'react-router-dom';

export default function Header() {
  return (
    <header>
        <ul>
            <li>
                <NavLink to="/" activeClassName='active'>Home</NavLink>
            </li>
            <li>
                <NavLink to="/about" activeClassName='active'>About</NavLink>
            </li>
            <li>
                <NavLink to="/account" activeClassName='active'>Account</NavLink>
            </li>
            <li>
                <NavLink to="/todolist" activeClassName='active'>ToDoList</NavLink>
            </li>
        </ul>
    </header>
  )
}
