
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import './index.css'
import AppComp from './routes/AppRoutes'

createRoot(document.getElementById('root')).render(
  <Router>
    <AppComp/>
  </Router>,
)
