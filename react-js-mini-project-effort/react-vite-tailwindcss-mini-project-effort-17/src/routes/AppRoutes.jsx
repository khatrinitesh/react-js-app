import React from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';

// layout
import MainLayout from '../layout/MainLayout';
// pages
import Home from '../pages/Home';
import Contact from '../pages/Contact';
import Service from '../pages/Service';
import About from './../pages/About';
// import PageNotFound from '../pages/PageNotFound';

// app routes 
const AppRoutes = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout/>,
        children:[
            {
                index:true,
                element:<Home/>,
            },
            {
                path:'/About',
                element:<About/>,
            },
            {
                path:'/service',
                element:<Service/>,
            },
            {
                path:'/contact',
                element:<Contact/>,
            },
            {
                path:'*',
                element:<Navigate to="/"/>,
            },
            
        ]
    },
    // {
    //     path:'*',
    //     element:<PageNotFound/>
    // }
])

export default AppRoutes;
