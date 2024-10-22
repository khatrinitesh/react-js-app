
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import Welcome from './pages/Welcome.jsx'
import Details from './pages/details.jsx'
import ThankYou from './pages/ThankYou.jsx'

const AppRoutes = createBrowserRouter([
  {
    path:'/',
    element:<Welcome/>, // welcome page
  },
  {
    path:'/details',
    element:<Details/> // details page
  },
  {
    path:'/thankyou',
    element:<ThankYou/> // thankyou page
  },
])

createRoot(document.getElementById('root')).render(
  <>
    <RouterProvider router={AppRoutes} />
  </>,
)
