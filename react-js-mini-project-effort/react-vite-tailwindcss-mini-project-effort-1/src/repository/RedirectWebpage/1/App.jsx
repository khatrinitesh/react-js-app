import React from 'react';
import {  Outlet, Route, Routes } from 'react-router-dom';

const RedirectWebApp = () => {
  return (
    <>
        <Routes path="/" element={<Layout/>}>
            <Route index element={<Home />} />
            <Route path="/service" element={<Service />} />
            <Route path="/product" element={<Product />} />
        </Routes>
    </>
  )
}

export default RedirectWebApp

const Layout = () => {
    return(
        <>
        <nav>
        {/* Navigation Bar */}
        <ul>
          <li>Home</li>
          <li>About</li>
          {/* Add more navigation items as needed */}
        </ul>
      </nav>

      <div>
        <Outlet/>
      </div>
        </>
    )
}

const Home = () => {
    return(
        <>
         <h1>Home</h1>
        </>
    )
}

const Product = () => {
    return(
        <>
         <h1>Product</h1>
        </>
    )
}

const Service = () => {
    return(
        <>
         <h1>Service</h1>
        </>
    )
}

const Error = () => {
    return(
        <>
         <h1>Error</h1>
        </>
    )
}