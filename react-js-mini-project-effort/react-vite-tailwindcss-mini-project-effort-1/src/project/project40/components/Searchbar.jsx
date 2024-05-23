import React, { useState } from 'react';

const Searchbar = ({data}) => {
    const [searchQuery, setSearchQuery] = useState('');
  
    // Filter data based on the search query
      const filteredData = data.filter(item => 
        (typeof item === 'string') && item.toLowerCase().includes(searchQuery.toLowerCase())
      );


      

  
  return (
    <>
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <ul>
        {filteredData.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  )
}

export default Searchbar
