import React,{useState} from 'react';
import { NavLink } from 'react-router-dom';

export default function LeftSidebar() {

  const [open,setOpen] = useState(false);

  const btnHamburger  =()=>{
    setOpen(!open)
  }

  const btnClose = () => {
    setOpen(false)
  }
  return (
    <>
    <button onClick={btnHamburger}>&#9776;</button>
    <div className={`left_sidebar ? ${open ? 'left_sidebar open' : 'left_sidebar'} `}>
      <button onClick={btnClose}>&times;</button>
      <ul className='list-unstyled'>
        <li>
            <NavLink to="/admin" activeClassName="active">Home</NavLink>
        </li>
        <li>
            <NavLink to="/admin" activeClassName="active">About</NavLink>
        </li>
        <li>
            <NavLink to="/admin" activeClassName="active">Contact</NavLink>
        </li>
      </ul>
    </div>
   
    </>
  )
}
