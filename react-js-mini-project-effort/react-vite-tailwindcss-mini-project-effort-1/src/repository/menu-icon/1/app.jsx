import React,{useState} from 'react';
import { FaHamburger } from "react-icons/fa";
import './custom.css';

export default function CustomApp() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar  =() => {
    setIsSidebarOpen(false)
    alert('hi')
  }
  return (
    <>
      <button onClick={toggleSidebar}>Toggle Sidebar</button>
     <div className={`container sidebar ${isSidebarOpen ? 'sidebar-open' : 'sidebar-close'}`}>

      {/* Sidebar content */}
      <div>
        <button onClick={closeSidebar} className='btnClose'>&times;</button>
        {/* Sidebar items go here */}
        <p>Sidebar Content Goes Here</p>
         {/* Main content */}
        <div className="main-content">
            {/* Main content goes here */}
            <p>Main Content Goes Here</p>
        </div>
      </div>

     
    </div>
    </>
  )
}

function Sidebar(){
    return(
        <div className='sidebar'>
            <ul>
                <li>
                    <NavLink>Terms & Conditions</NavLink>
                </li>
                <li>
                    <NavLink>Terms & Conditions</NavLink>
                </li>
                <li>
                    <NavLink>Terms & Conditions</NavLink>
                </li>
            </ul>
        </div>
    )
}
