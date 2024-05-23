import React, { useState, useEffect } from 'react';

const LoadersApp = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating an asynchronous data fetch
    const fetchData = async () => {
      // Simulate a delay (e.g., API call)
      await new Promise(resolve => 
        setTimeout(resolve, 2000));
      // Once the data is fetched, update the state
      setData("Fetched data!");
      setLoading(false);
    };

    // Call the fetchData function
    fetchData();
  }, []);


  return (
    <>
      <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          {/* Display your data here */}
          <p>{data}</p>
        </div>
      )}
    </div>
    </>
  )
}

export default LoadersApp
