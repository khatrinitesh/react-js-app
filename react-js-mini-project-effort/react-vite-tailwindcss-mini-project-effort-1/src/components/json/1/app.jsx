import React, { useState, useEffect } from 'react';
import data from './data.json';

export default function JsonExample() {
  return (
    <>
        <DataList/>
    </>
  )
}


function DataList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch the JSON data from your file or API
    fetch('./data.json')
      .then((response) => response.json())
      .then((jsonData) => setData(jsonData))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h1>Data List</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <img src={item.icon} alt={item.title} />
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
