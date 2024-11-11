import React, { useState } from 'react';

const AutoCompleteComp = () => {
    const [query, setQuery] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const handleInputChange = (e) => {
        const searchQuery = e.target.value 
        setQuery(searchQuery);

        if(searchQuery.length > 0){
            const filteredSuggestions = allSuggestions.filter((item) =>
                item.toLowerCase().includes(searchQuery.toLowerCase())
              );
              setSuggestions(filteredSuggestions);
        }
        else{
            setSuggestions([]);
        }
    }

    const handleSuggestionClick = (suggestion) => {
        setQuery(suggestion);
        setSuggestions([]); // Hide suggestions after selecting
      };

  return (
    <>
      <div className="autocomplete-container" style={{ position: 'relative', width: '300px' }}>
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search fruits..."
        className="search-input"
        style={{ width: '100%', padding: '10px' }}
      />

      {suggestions.length > 0 && (
        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          style={{
            position: 'absolute',
            top: '40px',
            left: '0',
            right: '0',
            border: '1px solid #ccc',
            background: 'white',
            listStyle: 'none',
            padding: '0',
            margin: '0',
            maxHeight: '200px',
            overflowY: 'auto',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            zIndex: 10,
          }}
        >
          {suggestions.map((suggestion, index) => (
            <motion.li
              key={index}
              onClick={() => handleSuggestionClick(suggestion)}
              style={{
                padding: '10px',
                cursor: 'pointer',
                background: '#fff',
                borderBottom: '1px solid #eee',
              }}
              whileHover={{ backgroundColor: '#f1f1f1' }}
            >
              {suggestion}
            </motion.li>
          ))}
        </motion.ul>
      )}
    </div>
    </>
  );
}

export default AutoCompleteComp;
