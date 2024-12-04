import React, { useEffect, useState } from 'react';

const HooksUseEffect = () => {

    const [data,setData] = useState([]);
    const [show,setShow] = useState(false);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((data) => setData(data));   // Set fetched data to state
    },[]); // Empty dependency array means this effect runs once on mount

    const btnToggle = () => {
        setShow((prev) => !prev)
    }
  return (
    <>
      <button onClick={btnToggle}>Toggle</button>
      {show && (
        data.map((val) => (
            <div key={val.id}>
                <h3>{val.title}</h3>
            </div>
        ))
    )}
    </>
  );
}

export default HooksUseEffect;
