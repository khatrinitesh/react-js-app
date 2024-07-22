import React from 'react';
import { useSelector } from 'react-redux';
import ProductDetail from './../components/ProductDetail';
import { Link } from 'react-router-dom';

const ProductDetailPage = () => {

  const selectedProduct = useSelector(state => state.products.selectedProduct)

  return (
    <>
      <h2>Product Detail Page</h2>
      <Link to="/products">Back</Link>
      {selectedProduct && <ProductDetail product={selectedProduct} />}
    </>
  )
}

export default ProductDetailPage