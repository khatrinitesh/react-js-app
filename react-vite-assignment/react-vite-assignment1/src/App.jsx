import { useState } from 'react'
import './index.css'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'

//============== LAYOUT
import MainLayout from './layout/mainLayout'

//============== PAGES
import ServiceList from './pages/servicelist'
import ServiceDetail from './pages/servicedetail'
import Home from './pages/home'
import About from './pages/about'
import Contact from './pages/contact'
import Error from './pages/error'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<MainLayout/>}>
            <Route index element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/servicelist" element={<ServiceList/>}/>
            <Route path="/servicedetail/:id" element={<ServiceDetail/>}/>
            <Route path="/contact" element={<Contact/>}/>
          </Route>
          <Route path="*" element={<Error/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
