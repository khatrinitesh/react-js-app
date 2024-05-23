import React, { useEffect, useState } from 'react';

const RestApiCallApp = () => {

    const [data, setData] = useState([]);
    const [data2, setData2] = useState([]);

    useEffect(() => {
        // Access the API URL from the environment variable
        const apiUrl = import.meta.env.VITE_DATO_API_TOKEN1;

        // Make API request using the apiUrl
        fetch(apiUrl)
            .then((response) => response.json())
            .then((result) => setData(result.products))
            .catch((error) => console.log('Error fetching data:', error));
    }, []);

    useEffect(() => {
        // Access the API URL from the environment variable
        const apiUrl = import.meta.env.VITE_DATO_API_TOKEN2;

        // Make API request using the apiUrl
        fetch(apiUrl)
            .then((response) => response.json())
            .then((result) => setData2(result))
            .catch((error) => console.log('Error fetching data:', error));
    }, []);
    return (
        <>
            {data.map((item) => (
                <div key={item.id}>{item.title} - {item.category}</div>
            ))}

            <hr />

            {data2.map((item) => (
                <div key={item.id}>{item.email}</div>
            ))}
        </>
    )
}

export default RestApiCallApp
