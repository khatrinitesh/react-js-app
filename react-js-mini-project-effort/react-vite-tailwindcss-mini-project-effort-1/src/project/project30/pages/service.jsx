import React, { useEffect, useState } from 'react';
import Banner from '../components/banner';


export default function Service() {
   // Define a state variable to store the fetched data
   const [data, setData] = useState([]);

   // Define an effect that will run when the component mounts
  useEffect(() => {
    // Define an async function to fetch data from the API
    async function fetchData() {
      try {
        // Make an API request and store the response in a variable
        const response = await fetch('https://jsonplaceholder.typicode.com/comments');
        
        // Check if the response status is OK (200)
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        
        // Parse the JSON data from the response
        const jsonData = await response.json();

        // Update the state with the fetched data
        setData(jsonData);
      } 
      catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    // Call the fetchData function to initiate the API request
    fetchData();
  }, []); // The empty array as the second argument means this effect will run once when the component mounts

  const btnRemove = (id) => {
    const newData = data.filter((val) => val.id !== id)
    setData(newData)
  }


  return (
    <div className='content'>
        <Banner title="Service" desc="Ea aliquip sunt ullamco consequat consectetur enim nostrud."/>
        <div className='row'>
          {data.map((val) => {
            const {id,name,email,body} = val;
            return(
              <div className='col-12 col-sm-6 col-md-4 mb-4'>
                <div className='card p-4  h-100 d-flex justify-space-between'>
                  <div className='d-flex justify-space-between flex-column h-100'>
                    <h3 className='mb-3'>{id} - {name}</h3>
                    <p className='mb-3'>{email}</p>
                    <p className='mb-3'>{body}</p>
                  </div>
                  <button onClick={() => btnRemove(id)} className='btn btn-primary'>Remove</button>
                </div>
              </div>
            )
          })}
        </div>
    </div>
  )
}
