import React, { useState } from 'react';
import { useAutoComplete } from './../store/useAutoComplete';
import { AnimatePresence, motion } from 'framer-motion';


const sampleData = ['Apple', 'Banana', 'Blueberry', 'Cherry', 'Mango', 'Orange', 'Strawberry'];

const AutocompleteComp = () => {

    const {query,setQuery}  = useAutoComplete();
    const [isFocused,setIsFocused] = useState(false);

    const filtered = sampleData.filter(item => item.toLowerCase().includes(query.toLowerCase()))
  return (
    <>
      <div style={{ position: 'relative', width: '300px', margin: '2rem auto' }}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setTimeout(() => setIsFocused(false))}
        placeholder="Search fruit..."
        style={{
          width: '100%',
          padding: '10px',
          fontSize: '16px',
          borderRadius: '4px',
          border: '1px solid #ccc',
        }}
      />

      <AnimatePresence>
        {isFocused && query && filtered.length > 0 && (
          <motion.ul
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            style={{
              position: 'absolute',
              width: '100%',
              backgroundColor: '#fff',
              boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
              listStyle: 'none',
              padding: '0.5rem 0',
              margin: 0,
              borderRadius: '4px',
              zIndex: 10,
            }}
          >
            {filtered.map((item, i) => (
              <li
                key={i}
                onMouseDown={() => setQuery(item)}
                style={{
                  padding: '8px 12px',
                  cursor: 'pointer',
                  transition: 'background 0.2s',
                }}
                onMouseEnter={(e) => (e.target.style.background = '#f0f0f0')}
                onMouseLeave={(e) => (e.target.style.background = 'white')}
              >
                {item}
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
    </>
  );
}

export default AutocompleteComp;


