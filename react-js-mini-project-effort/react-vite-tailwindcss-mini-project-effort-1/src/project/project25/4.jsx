import React, { useState, useEffect } from 'react';

export default function CustomApp({query}) {
    const [results, setResults] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts?title_like=^q`);
            const data = await response.json();
            setResults(data);
        }
        fetchData();
    },[query])
  return (
    <>
        <ul>
            {results.map((result) => (
                <li key={result.id}>{result.title}</li>
            ))}
        </ul>
    </>
  )
}
