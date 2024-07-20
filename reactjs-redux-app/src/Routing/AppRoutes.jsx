import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Splash from '../pages/Splash';
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';

const AppRoutes = () => {

    const currentPage = useSelector((state) => state.currentPage);
    const navigate = useNavigate();

    useEffect(() => {
        if (!['splash', 'home', 'about', 'contact'].includes(currentPage)) {
            navigate('/'); // Navigate to splash page if currentPage is invalid
        } else if (currentPage === 'splash') {
            navigate('/home'); // Navigate to home page if currentPage is 'home'
        }
    }, [currentPage, navigate]);

    return (
        <>
            <Routes>
                <Route path="/" element={<Splash />} />
                <Route path="/splash" element={<Splash />} />
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<Navigate to="/splash" />} />
            </Routes>
        </>
    )
}

export default AppRoutes