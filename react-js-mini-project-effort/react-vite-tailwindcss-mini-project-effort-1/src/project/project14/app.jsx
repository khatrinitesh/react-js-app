import React from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import './scss/custom.scss';
import "bootstrap/dist/css/bootstrap.css";

const Home = React.lazy(() => import('./pages/home'));
const About = React.lazy(() => import('./pages/about'));
const Service = React.lazy(() => import('./pages/service'));
const Contact = React.lazy(() => import('./pages/contact'));
const Error = React.lazy(() => import('./pages/error'));

const MainLayout = React.lazy(() => import('./layout/mainlayout'));

export default function CustomApp() {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
        <Router>
            <Routes>
                <Route path="/" element={<MainLayout/>}>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/service" element={<Service/>}/>
                    <Route path="/contat" element={<Contact/>}/>
                </Route>
                <Route path="*" element={<Error/>}/>
            </Routes>
      </Router>
    </React.Suspense>
  )
}
