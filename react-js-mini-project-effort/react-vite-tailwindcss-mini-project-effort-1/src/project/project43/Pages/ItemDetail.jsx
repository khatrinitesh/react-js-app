import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';


const ItemDetail = () => {
    const { id } = useParams();
    const [item, setItem] = useState(null);
    const navigate = useNavigate();


    const baseUrl = 'https://jsonplaceholder.typicode.com/posts'

    useEffect(() => {
        // Fetch detailed data for the specific item
        const fetchItem = async () => {
            try {
                const response = await fetch(`${baseUrl}/${id}`);
                console.log(response);
                const data = await response.json();
                setItem(data);
            } catch (error) {
                console.error('Error fetching item details:', error);
            }
        };

        fetchItem();
        // Perform API call or any other action based on the item ID
        console.log(`Fetching details for item with ID: ${id}`);
    }, [id]);

    const handleBackClick = () => {
        // Use navigate to redirect to the previous page (or any other page)
        navigate(-1);

    }

    console.log(item);

    return (
        <div>
            <h3>Item Detail {id}</h3>
            <button onClick={handleBackClick}>Go Back</button>
            {item ? (
                <>
                    <p>Name: {item.title}</p>
                    <p>Description: {item.body}</p>
                </>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    )
}

export default ItemDetail
