import React, { useState } from "react";

const CascadingDropdownApp = () => {
  return (
    <>
      <CascadingDropdown />
    </>
  );
};

export default CascadingDropdownApp;

const CascadingDropdown = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSubcategory, setSelectedSubcategory] = useState("");

  const categories = [
    {
      id: "1",
      name: "Category 1",
      subcategories: ["Subcategory 1A", "Subcategory 1B"],
    },
    {
      id: "2",
      name: "Category 2",
      subcategories: ["Subcategory 2A", "Subcategory 2B"],
    },
    // Add more categories as needed
  ];

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
    setSelectedSubcategory(""); // Reset subcategory when category changes
  };

  const handleSubcategoryChange = (event) => {
    setSelectedSubcategory(event.target.value);
  };

  return (
    <div>
      <label htmlFor="category">Select Category:</label>
      <select
        id="category"
        value={selectedCategory}
        onChange={handleCategoryChange}
      >
        <option value="">Select...</option>
        {categories.map((category) => (
          <option key={category.id} value={category.id}>
            {category.name}
          </option>
        ))}
      </select>

      {selectedCategory && (
        <>
          <br />
          <label htmlFor="subcategory">Select Subcategory:</label>
          <select
            id="subcategory"
            value={selectedSubcategory}
            onChange={handleSubcategoryChange}
          >
            <option value="">Select...</option>
            {categories
              .find((category) => category.id === selectedCategory)
              .subcategories.map((subcategory, index) => (
                <option key={index} value={subcategory}>
                  {subcategory}
                </option>
              ))}
          </select>
        </>
      )}
    </div>
  );
};
