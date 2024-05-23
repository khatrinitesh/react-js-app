import React, { useState } from "react";
import './style.css';

const CustomApp = () => {
  return (
    <>
    <h1>Product Grid</h1>
      <Grid />
    </>
  )
};

export default CustomApp;

const Grid = () => {
  const [data, setData] = useState([
    { id: 1, name: "Product A", price: 25.99 },
    { id: 2, name: "Product B", price: 19.99 },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSortChange = () => {
    setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"));
  };

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedData = [...filteredData].sort((a, b) => {
    const order = sortOrder === "asc" ? 1 : -1;
    return order * a.name.localeCompare(b.name);
  });

  const handleItemClick = (id) => {
    console.log(`Item clicked with ID: ${id}`);
  };
  return (
    <>
      <div className="grid-container">
        <div className="grid-controls">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="input"
          />
          <button onClick={handleSortChange} className="button">
            {sortOrder === "asc" ? "Sort Asc" : "Sort Desc"}
          </button>
        </div>
        <div className="grid">
          {sortedData.map((item) => (
            <div
              key={item.id}
              className="grid-item"
              onClick={() => handleItemClick(item.id)}
            >
              <p>{item.name}</p>
              <p>${item.price.toFixed(2)}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
