import React from 'react';
import { Outlet } from 'react-router-dom';

// COMPONENTS
import Header from '../Components/Header';
import Footer from '../Components/Footer';

const MainLayout = () => {
    return (
        <>
            <Header />
            <div className='mainContent'>
                <Outlet />
            </div>
            <Footer />
        </>
    )
}

export default MainLayout
