import React from 'react';
import { Link, Outlet } from "react-router-dom";

export default function Products() {
  return (
    <div className="products">
        <div className="productsNav">
            <Link to="/products/search"> Search </Link>
            <Link to="/products/list/"> List </Link>
            <Link to="/products/add"> Add </Link>
        </div>
    <Outlet />
  </div>
  )
}
