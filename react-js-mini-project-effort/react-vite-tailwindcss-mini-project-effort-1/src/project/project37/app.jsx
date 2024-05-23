import React from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';

const Home = React.lazy(() => import("./pages/Home"));
const About = React.lazy(() => import("./pages/About"));
const Product = React.lazy(() => import("./pages/Product"));
const Contact = React.lazy(() => import("./pages/Contact"));
const Error = React.lazy(() => import("./pages/Error"));
const MainLayout = React.lazy(() => import("./MainLayout"));

export default function CustomApp() {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
    <Router>
      <Routes>
        <Route path='/' element={<MainLayout/>}>
            <Route index element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/product' element={<Product/>}/>
            <Route path='/contact' element={<Contact/>}/>
        </Route>
        <Route path='*' element={<Error/>}/>
      </Routes>
    </Router>
    </React.Suspense>
  )
}
