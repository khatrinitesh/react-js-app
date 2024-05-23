import React, { useState } from 'react';

const SearchBtnApp = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = () => {
        // Implement your search logic here
        console.log('Searching for:', searchTerm);
    };
    return (
        <>
            <div className="flex items-center">
                <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search..."
                    className="border px-2 py-1"
                />
                <button onClick={handleSearch} className="ml-2 bg-blue-500 text-white px-4 py-2 rounded-md">
                    Search
                </button>
            </div>
        </>
    )
}

export default SearchBtnApp
