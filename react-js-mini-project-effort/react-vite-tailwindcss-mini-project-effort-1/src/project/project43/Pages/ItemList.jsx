import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ItemList = () => {

    const [items, setItems] = useState([]);

    const baseUrl = 'https://jsonplaceholder.typicode.com/posts'
    useEffect(() => {
        // fetch data from your API
        const fetchdata = async () => {
            try {
                const response = await fetch(baseUrl)
                if (!response.ok) {
                    throw new Error('sorry something went wrong')
                }
                const data = await response.json()
                setItems(data)
            }
            catch (error) {
                console.log('error fetching data', error)
            }
        }

        fetchdata()
    }, [])

    const btnDel = (id) => {
        const newData = items.filter((val) => val.id !== id)
        setItems(newData)
    }
    return (
        <>
            {items.map((val) => {
                return (
                    <div key={val.id}>
                        <h3>{val.title}</h3>
                        <p>{val.body}</p>
                        <Link to={`/items/${val.id}/`} className='font-bold'>Link</Link>
                        <button onClick={() => btnDel(val.id)}>&times;</button>
                    </div>
                )
            })}
        </>
    )
}

export default ItemList
