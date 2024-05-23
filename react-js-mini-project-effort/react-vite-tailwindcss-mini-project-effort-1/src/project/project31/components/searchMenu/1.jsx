import React, { useState } from 'react';
import {locations} from './mapData';

export default function SearchMenuApp() {
    const [filteredLocations, setFilteredLocations] = useState(locations);

    const handleFilter = (searchTerm) => {
        const filtered = locations.filter((location) =>
          location.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredLocations(filtered);
      };
    
  return (
    <>
    <h1>Map Search</h1>
      <SearchMenu locations={locations} onFilter={handleFilter} />
      <Map filteredLocations={filteredLocations} />
    </>
  )
}

const Map = ({ filteredLocations }) => {
    return (
      <div className="map">
        <ul>
          {filteredLocations.map((location) => (
            <li key={location.id}>
              {location.name} - {location.city}
            </li>
          ))}
        </ul>
      </div>
    );
  };

const SearchMenu = ({ locations, onFilter }) => {
    const [searchTerm, setSearchTerm] = useState('');
  
    const handleSearchChange = (e) => {
      const value = e.target.value;
      setSearchTerm(value);
      onFilter(value);
    };
  
    return (
      <div className="search-menu">
        <input
          type="text"
          placeholder="Search locations..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
    );
  };
