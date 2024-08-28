import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

// layout
import MainLayout from '../layout/MainLayout';
// pages
import Home from '../pages/Home';
import Contact from './../pages/Contact';
import Error from './../pages/Error';

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
                path:"/contact",
                element:<Contact/>
            },
        ]
    },
    {
        path:"*",
        element:<Error/>
    }
])

export default AppRoutes;
