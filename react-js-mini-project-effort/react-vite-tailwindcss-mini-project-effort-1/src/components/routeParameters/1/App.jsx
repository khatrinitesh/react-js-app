import React from 'react';
import {Routes,Route} from 'react-router-dom';
import Product from './Product';
import ProductList from './ProductList';


const products = [
    { id: 1, name: "Product 1", desc: "Ex cillum commodo elit amet quis veniam ea nostrud irure Lorem." },
    { id: 2, name: "Product 2", desc: "Ex cillum commodo elit amet quis veniam ea nostrud irure Lorem." },
    { id: 3, name: "Product 3", desc: "Ex cillum commodo elit amet quis veniam ea nostrud irure Lorem." },
    { id: 4, name: "Product 4", desc: "Ex cillum commodo elit amet quis veniam ea nostrud irure Lorem." },
]

const CustomApp = () => {
  return (
    <>
       <>
            <Routes>
                <Route path="/product/:productId" element={<Product products={products} />} /> 
                <Route path="/" element={<ProductList products={products} />} />
            </Routes>
        </>
    </>
  )
}

export default CustomApp
