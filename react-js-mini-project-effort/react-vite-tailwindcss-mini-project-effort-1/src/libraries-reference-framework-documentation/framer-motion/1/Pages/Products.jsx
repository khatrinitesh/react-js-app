import React from 'react';
import Title from '../Components/Title/Title';
import Product from "../Components/Product/Product";

const Products = () => {


    const ProductData = [
        {
            id: 1,
            src: "https://picsum.photos/id/0/300/200",
            alt: "Laptop",
            title: "Laptop",
            description: "This is a laptop for sale",
            delay: 0
        },
        {
            id: 2,
            src: "https://picsum.photos/id/0/300/200",
            alt: "Shoes",
            title: "Shoes",
            description: "These are some stylish shoes",
            delay: 1
        },
        {
            id: 3,
            src: "https://picsum.photos/id/0/300/200",
            alt: "Puppy",
            title: "Puppy",
            description: "This puppy isn't for sale. He's just cute",
            delay: 2
        },
    ]
    return (
        <>
            <div className="page products">
                <Title>Products</Title>
                <div className="product-list">
                    {ProductData.map((val) => {
                        const { id, src, alt, title, description, delay } = val
                        return (
                            <>
                                <Product key={id} alt={alt} src={src} title={title} description={description} delay={delay} />
                            </>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default Products
