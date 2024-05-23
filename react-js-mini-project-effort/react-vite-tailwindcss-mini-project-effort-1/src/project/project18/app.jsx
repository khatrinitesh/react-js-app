import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import '../../../node_modules/fontawesome-4.7/css/font-awesome.min.css'; 
import Header from "./components/common/header/header";


// BELOW PAGES
import About from "./pages/about/about";
import CourseHome from "./pages/allcourses/coursehome";
import Team from "./pages/team/team";
import Pricing from "./pages/pricing/pricing";
import Blog from "./pages/blog/blog"
import Home from "./pages/home/home";
import Contact from "./pages/contact/contact";
// BELOW FOOTER
import Footer from "./components/common/footer/footer";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={Home} />
          <Route path='/about' element={About} />
          <Route path='/courses' element={CourseHome} />
          <Route path='/team' element={Team} />
          <Route path='/pricing' element={Pricing} />
          <Route path='/journal' element={Blog} />
          <Route path='/contact' element={Contact} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App