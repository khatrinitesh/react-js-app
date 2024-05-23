import React,{lazy,Suspense} from 'react';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';


const Home = lazy(() => import('./pages/home'));
const About = lazy(() => import('./pages/about'));
const Contact = lazy(() => import('./pages/contact'));
const UserProfile = lazy(() => import('./pages/userprofile'));
const MainLayout = lazy(() => import('./mainlayout'));


export default function CustomApp() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
        <Router>
        <Routes>
            <Route path="/" element={<MainLayout/>}>
                <Route index element={<Home/>} />
                <Route path="/about" element={<About/>} />
                <Route path="/user/:id" element={<UserProfile/>} />
                <Route path="/contact" element={<Contact/>} />
                
            </Route>
            <Route path="*" element={Error} />
        </Routes>
        </Router>
    </Suspense>
  )
}
