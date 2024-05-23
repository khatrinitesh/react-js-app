import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import './style.css';

// LAYOUT
import MainLayout from './Layout/MainLayout';

// PAGES
import Home from './Pages/Home';
import About from './Pages/About';
import Service from './Pages/ServiceList';
import Contact from './Pages/Contact';
import Error from './Pages/Error';
import ItemList from './Pages/ItemList';
import ItemDetail from './Pages/ItemDetail';

export default function CustomApp() {
    return (
        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route index element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/service" element={<Service />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/items" element={<ItemList />} />
                {/* Nested route for item details */}
                <Route path="/items/:id" element={<ItemDetail />} />
            </Route>
            <Route path="*" element={<Error />} />
        </Routes>
    )
}
