import React from 'react'

// outlet layout
import { Outlet } from 'react-router-dom'
// components
import Header from './Header'
import Footer from './Footer'

const Main = () => {
  return (
    <>
    <Header/>
     <div className='mainContent'>
        <Outlet/>
     </div>
     <Footer/>
    </>
  )
}

export default Main