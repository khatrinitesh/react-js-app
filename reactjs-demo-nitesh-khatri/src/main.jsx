
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import AppRoutes from './routes/AppRoutes'
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

AOS.init({
  duration: 500, // Duration of animations
  easing: 'ease-in-out', // Easing function
  once: true, // Whether animation should happen only once
});

createRoot(document.getElementById('root')).render(
  <>
   <RouterProvider router={AppRoutes}/>
  </>
)
