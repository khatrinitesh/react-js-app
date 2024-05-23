import React from 'react';
import './styles.css';
// library
import { Router, Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

// components
import Navbar from "./Components/Navbar/Navbar"; // navbar

// pages
import Home from "./Pages/Home"; // home
import About from "./Pages/About"; // about  
import Products from "./Pages/Products" // product
import Contact from "./Pages/Contact"; // contact

const CustomApp = () => {

    const location = useLocation();

    return (
        <>
            <Navbar />
            <AnimatePresence mode="wait">
                <Routes location={location} key={location.pathname}>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </AnimatePresence>
        </>
    )
}

export default CustomApp
