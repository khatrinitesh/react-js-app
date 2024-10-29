
import { createRoot } from 'react-dom/client'
import './index.css'
// library
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// layout
import MainLayout from './layout/MainLayout.jsx'
// pages
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'


const AppRoutes =createBrowserRouter([
  {
    path:'/',
    element:<MainLayout/>,
    children:[
      {
        index:true,
        element:<Home/> // home
      },
      {
        path:'/about',
        element:<About/> // about
      },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <>
    <RouterProvider router={AppRoutes} />
  </>,
)

// 