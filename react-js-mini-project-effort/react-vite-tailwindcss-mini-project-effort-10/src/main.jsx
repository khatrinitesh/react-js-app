
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Welcome from './pages/Welcome.jsx'
import ThankYou from './pages/ThankYou.jsx'
import DetailLayout from './layout/DetailLayout.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element:<Welcome/>
  },
  {
    path:'/thankyou',
    element:<ThankYou/>
  },
  {
    path:'/details',
    element:<DetailLayout/>
  },
])

createRoot(document.getElementById('root')).render(
  <>
    <RouterProvider router={router} />
  </>,
)
