import React from 'react'
import { Link,useNavigate } from 'react-router-dom'

const ProductList = ({products}) => {
    const navigate = useNavigate();

    const btnBack = () => {
        navigate('/')
    }
  return (
    <div>
      <h2 className='font-bold text-[red]'>Products</h2>
            <ul>
                {products.map((product) => (
                    <li key={product.productId}>
                        <Link to={`/product/${product.id}`}>{product.name}</Link>
                    </li>
                ))}
            </ul>
    </div>
  )
}

export default ProductList
