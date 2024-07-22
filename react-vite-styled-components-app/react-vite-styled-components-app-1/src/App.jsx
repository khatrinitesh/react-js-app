import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// PAGES
import Home from "./project1/pages/Home";
import About from "./project1/pages/About";
import Contact from "./project1/pages/Contact";
import Error from './project1/pages/Error';
// LAYOUT
import Mainlayout from "./project1/layout/Mainlayout";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Mainlayout/>}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
