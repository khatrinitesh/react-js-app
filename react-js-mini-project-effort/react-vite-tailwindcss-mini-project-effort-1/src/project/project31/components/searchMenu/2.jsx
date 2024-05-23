import React, { useState, useEffect } from 'react';

export default function SearchBarApp() {
    const [searchTerm, setSearchTerm] = useState('');
    const [results, setResults] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);

    const data = ['apple', 'banana', 'cherry', 'date', 'elderberry', 'fig', 'grape', 'honeydew'];

    const handleInputChange = (event) => {
      const term = event.target.value;
      setSearchTerm(term);
      setShowSuggestions(true);
    };

    useEffect(() => {
        // Use a debounce function to delay API requests
        const debounce = (func, delay) => {
          let timer;
          return function () {
            const context = this;
            const args = arguments;
            clearTimeout(timer);
            timer = setTimeout(() => {
              func.apply(context, args);
            }, delay);
          };
    };

     // Simulate an API call to get search results
     const fetchResults = async (term) => {
        // Simulate an API call (e.g., with axios) to get results
        const filteredResults = data.filter((item) =>
          item.toLowerCase().includes(term.toLowerCase())
        );
        setResults(filteredResults);
      };
  
      if (searchTerm && showSuggestions) {
        const searchDebounced = debounce(fetchResults, 300);
        searchDebounced(searchTerm);
      } else {
        setResults([]);
      }
    }, [searchTerm, showSuggestions]);
  
    const handleItemClick = (item) => {
      setSearchTerm(item);
      setShowSuggestions(false);
    };

  return (
    <>
    <div className="search-bar">
        <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleInputChange}
            onBlur={() => setShowSuggestions(false)}
        />
        {showSuggestions && (
            <ul className="suggestions">
            {results.map((item, index) => (
                <li key={index} onClick={() => handleItemClick(item)}>
                {item}
                </li>
            ))}
            </ul>
        )}
    </div>
    </>
  )
}
