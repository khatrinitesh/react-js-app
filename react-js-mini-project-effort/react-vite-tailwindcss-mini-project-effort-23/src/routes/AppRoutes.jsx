import React from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
import About from '../pages/About';
import Home from './../pages/Home';
import Contact from '../pages/Contact';
import Service from '../pages/Service';

const AppRoutes = createBrowserRouter([
    {
        path:"/",
        element:<MainLayout/>,
        children:[
            {
                index:true,
                element:<Home/>
            },
            {
                path:"/about",
                element:<About/>
            },
            {
                path:"/service",
                element:<Service/>
            },
            {
                path:"/contact",
                element:<Contact/>
            },
            {
                path:"*",
                element:<Navigate to="/"/>
            }
        ]
    },
])

export default AppRoutes;
