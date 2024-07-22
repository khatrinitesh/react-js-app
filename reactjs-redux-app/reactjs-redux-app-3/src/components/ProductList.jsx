import React from 'react'
import { Link } from 'react-router-dom'

const ProductList = ({products }) => {
  return (
    <div>
        <h3>Products:</h3>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <Link to={`/products/${product.id}`}>{product.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ProductList