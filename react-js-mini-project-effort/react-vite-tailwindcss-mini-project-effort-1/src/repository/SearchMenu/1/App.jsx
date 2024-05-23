import React, { useState } from 'react';

const data = [
    { id: 1, name: 'Apple', category: 'Fruit' },
    { id: 2, name: 'Banana', category: 'Fruit' },
    { id: 3, name: 'Carrot', category: 'Vegetable' },
    { id: 4, name: 'Broccoli', category: 'Vegetable' },
  ];

const SearchMenuApp = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredData, setFilteredData] = useState(data);

    const handleSearch  =(e) => {
        const term = e.target.value.toLowerCase();
        setSearchTerm(term);
        const filtered = data.filter((item) => item.name.toLowerCase().includes(term))
        setFilteredData(filtered);
    }
  return (
    <>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearch}
      />
       <ul>
        {filteredData.map((item) => (
          <li key={item.id}>
            {item.name} - {item.category}
          </li>
        ))}
      </ul>
    </>
  )
}

export default SearchMenuApp
