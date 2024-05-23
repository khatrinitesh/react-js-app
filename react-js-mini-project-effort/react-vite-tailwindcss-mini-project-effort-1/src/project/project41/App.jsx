import React from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.css";


const Home = React.lazy(() => import("./pages/Home"));
const About = React.lazy(() => import("./pages/About"));
const Contact = React.lazy(() => import("./pages/Contact"));

const CustomApp = () => {
  return (
    <Router>
      <Routes>
        <Route index element={<React.Suspense>
            <Home/>
        </React.Suspense>}></Route>
        <Route path="/about" element={<React.Suspense>
            <About/>
        </React.Suspense>}></Route>
        <Route path="/contact" element={<React.Suspense>
            <Contact/>
        </React.Suspense>}></Route>
      </Routes>
    </Router>
  )
}

export default CustomApp
