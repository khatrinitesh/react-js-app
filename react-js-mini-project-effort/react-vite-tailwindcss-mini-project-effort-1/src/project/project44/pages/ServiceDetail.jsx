import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

// COMPONENTS
import Banner from "../components/Banner";

const ServiceDetail = ({ style }) => {
    const { id } = useParams();
    const [items, setItems] = useState([])
    const navigate = useNavigate();

    const btnBack = () => {
        navigate('/service');
    }

    const baseurl = 'https://jsonplaceholder.typicode.com/posts'

    useEffect(() => {
        const fetchItem = async () => {
            try {
                const response = await fetch(`${baseurl}/${id}`)
                console.log(response)
                if (!response) {
                    throw new Error('sorry something went wrong')
                }
                const data = await response.json();
                setItems(data);
            }
            catch (error) {
                console.log('Error fetching item details:', error)
            }
        }
        fetchItem();
        // Perform API call or any other action based on the item ID
        console.log(`Fetching details for item with ID: ${id}`)
    }, [id])

    return (
        <div className={`${style} w-full`}>
            <Banner title="Service detail" desc="Lorem Ipsum" />
            <button className="bg-[orange] text-white px-[10px] py-[5px]" onClick={btnBack}>Go Back</button>
            <h2 className='font-bold text-[30px]'>{id}</h2>
            {items ? (<ItemDetail title={items.title} body={items.body} />) : (<div>Loading...</div>)}
        </div>
    )
}

export default ServiceDetail

function ItemDetail({ title, body }) {
    return (
        <div className='card'>
            <h3 className='font-bold text-[20px]'>{title}</h3>
            <p>{body}</p>
        </div>
    )
}
