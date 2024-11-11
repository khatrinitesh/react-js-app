import React, { useState } from 'react';
import { motion } from 'framer-motion';


const AnimatedSearchComp = () => {
  return (
    <>
      <AnimatedSearch/>
    </>
  );
}

export default AnimatedSearchComp;

const AnimatedSearch = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [isFocused, setIsFocused] = useState(false);
  
    const handleFocus = () => setIsFocused(true);

    const handleBlur = () => {
      if (searchQuery === '') setIsFocused(false); // Only collapse if the input is empty
    };
  
    const handleChange = (event) => setSearchQuery(event.target.value);
    
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log('Search Query:', searchQuery);
    };
  
    return (
      <div className="flex justify-center mt-10">
        <motion.div
          className="relative"
          initial={{ width: 200 }} // Initial width when not focused
          animate={{ width: isFocused || searchQuery ? 300 : 200 }} // Expands when focused or text is entered
          transition={{ type: 'spring', stiffness: 200 }}
        >
          <form onSubmit={handleSubmit} className="flex">
            <motion.input
              type="text"
              value={searchQuery}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              placeholder="Search..."
              className="px-4 py-2 rounded-md w-full outline-none border border-gray-300 focus:border-blue-500"
            />
            <button
              type="submit"
              className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-md focus:outline-none"
            >
              Search
            </button>
          </form>
        </motion.div>
      </div>
    );
  };
