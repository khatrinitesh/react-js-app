import React from 'react';
import { useParams } from 'react-router-dom';

const Product = ({products}) => {

    const { productId } = useParams();

    const product = products.find((product) => product.id === parseInt(productId))

  return (
    <div>

        <h2>{product.name}</h2>
        <p>{product.desc}</p>
    </div>
  )
}

export default Product
