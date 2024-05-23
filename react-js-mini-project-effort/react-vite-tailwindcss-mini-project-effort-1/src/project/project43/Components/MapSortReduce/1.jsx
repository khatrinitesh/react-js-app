import React from 'react'

const MapSortReduceApp = () => {

    const products = [
        { id: 1, name: 'Laptop', price: 1200 },
        { id: 2, name: 'Smartphone', price: 800 },
        { id: 3, name: 'Tablet', price: 400 },
    ];

    // use map to render a list of product names
    const ProductList = products.map((val) => <li key={val.id}>{val.name}</li>)

    const FilterList = products.filter((val) => val.name === 'Laptop')

    return (
        <div>
            <h2>{ProductList}</h2>
            <br />
        </div>
    )
}

export default MapSortReduceApp
