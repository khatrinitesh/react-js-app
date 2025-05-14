
import { RouterProvider } from 'react-router-dom'
import './index.css'
import AppRoutes from './routes/AppRoutes'
import { createRoot } from 'react-dom/client'

createRoot(document.getElementById('root')).render(
  <>
    <RouterProvider router={AppRoutes} />
  </>,
)
