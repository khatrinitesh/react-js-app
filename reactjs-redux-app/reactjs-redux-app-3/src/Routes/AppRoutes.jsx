import React from 'react';
// library
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import { Provider } from 'react-redux';
// redux store 
import store from './../redux/store';
// pages
import About from '../pages/About';
import ProductList from '../pages/ProductList';
import ProductDetail from '../pages/ProductDetail';
import Contact from './../pages/Contact';
import Home from './../pages/Home';

const AppRoutes = () => {
  return (
    <Provider store={store}>
        <Router>
            <Routes>
                <Route index element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/products" element={<ProductList/>}/>
                <Route path="/products/:id" element={<ProductDetail/>}/>
                <Route path="/contact" element={<Contact/>}/>
            </Routes>
        </Router>
    </Provider>
  )
}

export default AppRoutes