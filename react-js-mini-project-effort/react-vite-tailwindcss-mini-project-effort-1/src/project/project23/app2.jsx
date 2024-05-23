import React from 'react';
import {BrowserRouter as Router,Routes,Route,NavLink} from 'react-router-dom';

import Home from './pages/home';
import Login from './pages/login';
import Products from './pages/products/products';
import Search from './pages/products/search';
import List from './pages/products/list';
import Add from './pages/products/add';
import ProductDisplay from './pages/products/productdisplay';

export default function CustomApp() {
  return (
    <>
      <Router>
        <nav>
            <ul>
                <li>
                    <NavLink to="/" activeClassName="active">Home</NavLink>
                </li>
                <li>
                    <NavLink to="login" activeClassName="active">Login</NavLink>
                </li>
                <li>
                    <NavLink to="products/list" activeClassName="active">Products</NavLink>
                </li>
            </ul>
        </nav>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="login" element={<Login/>}/>
            <Route path="products" element={<Products/>}>
                <Route path="search" element={<Search/>}/>
                <Route path="list" element={<List/>}/>
                <Route path="add" element={<Add/>}/>
                <Route path=":id" element={<ProductDisplay/>}/>
            </Route>
        </Routes>
      </Router>
    </>
  )
}
