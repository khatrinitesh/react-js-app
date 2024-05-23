import React from 'react'
import { BrowserRouter as Router,Routes,Route,Navigate  } from 'react-router-dom';
import './App.css'


// PAGES
import Dashboard from './2/admin/Dashboard';
import Login from './2/admin/Login';
import Register from './2/admin/Register';
import Home from './2/pages/Home';
import About from './2/pages/About';
import Contact from './2/pages/Contact';


function App() {

  const isAuthenticated = true; // Change this based on your authentication state

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  )
}

export default App
