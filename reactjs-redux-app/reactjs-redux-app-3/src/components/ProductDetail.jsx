import React from 'react'

const ProductDetail = ({product}) => {
  return (
    <div>
        <h3>{product.name}</h3>
        <p>{product.description}</p>
    </div>
  )
}

export default ProductDetail