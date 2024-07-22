import React from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import { Provider } from 'react-redux';
import store from './../redux/store';
import Main from './../layout/Main';
import NotFound from '../pages/NotFound';

const AppRoutes = () => {
  return (
    <Provider store={store}>
        <Router>
            <Routes>
                <Route path='/' element={<Main/>}>
                <Route index element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/contact" element={<Contact/>}/>
                </Route>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </Router>
    </Provider>
  )
}

export default AppRoutes