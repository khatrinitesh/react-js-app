import React from 'react'
import { Outlet } from 'react-router-dom';

// COMPONENTS
import Header from "../components/Header";
import Footer from "../components/Footer";

const MainLayouts = ({ style }) => {
    return (
        <>
            <Header />
            <div className={`${style} mainContent`}>
                <Outlet />
            </div>
            <Footer />
        </>
    )
}

export default MainLayouts
