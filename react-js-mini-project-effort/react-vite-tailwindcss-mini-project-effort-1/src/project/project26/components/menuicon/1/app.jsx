import React,{useState} from 'react';
import Hamburger from 'hamburger-react'

export default function MenuIconApp() {
  return (
    <>
        <Example/>
    </>
  )
}

function Example(){
    const [isOpen, setOpen] = useState(false)

    const btnClose= () => {
        setOpen(false);
    }
    const btnCloseStyle = {
        color:'#fff',
        fontSize:'30px',
        textDecoration:'none',
        position:'absolute',
        top:'10px',
        right:'20px'
    }
    return(
        <>
            <Hamburger toggled={isOpen} toggle={setOpen} distance="lg" duration={0.8} color="#4FD1C5" easing="ease-in"  rounded  />
            <div className={isOpen ? 'sidebar sidebarOpen' : 'sidebar'}>
                <a href="" onClick={btnClose} style={btnCloseStyle}>&times;</a>
                <ul>
                    <li>List item1</li>
                    <li>List item1</li>
                    <li>List item1</li>
                </ul>
            </div>
        </>
    )
}