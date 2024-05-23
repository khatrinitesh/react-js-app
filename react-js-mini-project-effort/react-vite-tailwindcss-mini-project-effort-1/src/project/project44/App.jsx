import React from 'react';
import { Routes, Route } from 'react-router-dom';

// STYLING CSS
import './style.css'


// LAYOUTS
import MainLayouts from './layouts/MainLayouts';

// COMPONENTS
import Loading from './components/Loading';

// PAGES
const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const ServiceList = React.lazy(() => import('./pages/ServiceList'));
const ServiceDetail = React.lazy(() => import('./pages/ServiceDetail'));
const Contact = React.lazy(() => import('./pages/Contact'));
const Error = React.lazy(() => import('./pages/Error'));

const CustomApp = () => {
    return (
        <Routes>
            <Route path="/" element={<MainLayouts style="bg-[powderblue]" />}>
                <Route index element={<React.Suspense fallback={<Loading />}>
                    <Home />
                </React.Suspense>} />
                <Route path="/about" element={<React.Suspense fallback={<Loading />}>
                    <About />
                </React.Suspense>} />
                <Route path="/service" element={<React.Suspense fallback={<Loading />}>
                    <ServiceList />
                </React.Suspense>} />
                <Route path="/service/:id" element={<React.Suspense fallback={<Loading />}>
                    <ServiceDetail />
                </React.Suspense>} />
                <Route path="/contact" element={<React.Suspense fallback={<Loading />}>
                    <Contact />
                </React.Suspense>} />
            </Route>
            <Route path="*" element={<Error />} />
        </Routes >
    )
}

export default CustomApp
