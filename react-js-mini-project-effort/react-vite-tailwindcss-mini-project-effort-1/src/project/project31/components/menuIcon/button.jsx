import React from 'react';
import {FaBars} from 'react-icons/fa'

export default function MenuIcon(props) {
  const {onToggle} = props
  return (
    <>
    <button className="menu-icon" onClick={onToggle}>
        <FaBars />
    </button>
    </>
  )
}
