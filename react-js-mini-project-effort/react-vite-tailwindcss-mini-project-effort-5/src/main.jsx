import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css';
// library
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// pages
const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const Service = React.lazy(() => import('./pages/Service'));
const Contact = React.lazy(() => import('./pages/Contact'));
const Error = React.lazy(() => import('./pages/Error'));
// layut
const Main = React.lazy(() => import('./layout/Main'));
// components
import Loading from './components/Loading';

const router = createBrowserRouter([
  {
    path:'/',
    element:<Main/>,
    children:[
      {
        path: "/",
        element:<Home/>,
      },
      {
        path: "/about",
        element:<About/>,
      },
      {
        path: "/service",
        element:<Service/>,
      },
      {
        path: "/contact",
        element:<Contact/>,
      },
    ],
  },
  {
    path: "*",
    element:<Error/>,
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <Suspense fallback={<><Loading/></>}>
    <RouterProvider router={router} />
    </Suspense>
  </>,
)
