import React from 'react'
import { useSelector } from 'react-redux';
import ProductList from './../components/ProductList';

const ProductListPage = () => {
  const products = useSelector(state => state.products.products)
  return (
    <>
      <h2>Product List Page</h2>
      <ProductList products={products} />
    </>
  )
}

export default ProductListPage