import React, { useState } from 'react';

export default function CustomApp() {

    const [searchTerm, setSearchTerm] = useState('');
    const [fruits, setFruits] = useState(['Apple', 'Banana', 'Orange', 'Mango']);

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value)
    }

    const filteredFruits = fruits.filter((val) => val.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div>
        <h2>Fruit Search</h2>
        <input type='text' placeholder='Search for a fruit' value={searchTerm} onChange={handleSearchChange}/>
        <h3>Filtered Fruits:</h3>
        <ul>
            {filteredFruits.map((fruit,index) => {
                return(
                    <>
                     <li key={index}>{fruit}</li>
                    </>
                )
            })}
        </ul>
    </div>
  )
}


