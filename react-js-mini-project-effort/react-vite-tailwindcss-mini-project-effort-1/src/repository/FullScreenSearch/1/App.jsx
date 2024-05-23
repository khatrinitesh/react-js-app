import React, { useState } from 'react';

const FullScreenApp = () => {

    return (
        <>
            <FullscreenSearch />
        </>
    )
}

export default FullScreenApp

const FullscreenSearch = () => {
    const [isSearchVisible, setSearchVisible] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchToggle = () => {
        setSearchVisible(!isSearchVisible);
        setSearchTerm(''); // Clear the search term when the search is toggled
    };

    const handleSearch = () => {
        // Implement your search logic here
        console.log('Searching for:', searchTerm);
        // Close the search overlay after searching
        setSearchVisible(false);
    };

    return (
        <div className="flex items-center">
            <div className='bg-backgroundImg1 bg-cover bg-center h-80 w-96'>Qui commodo Lorem in duis adipisicing fugiat in sunt cupidatat qui et et.</div>
            <button onClick={handleSearchToggle} className="bg-blue-500 text-white px-4 py-2 rounded-md">
                Open Search
            </button>

            {isSearchVisible && (
                <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75">
                    <div className="bg-white p-8 rounded-md">
                        <input
                            type="text"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            placeholder="Search..."
                            className="w-full border px-2 py-1"
                        />
                        <button onClick={handleSearch} className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md">
                            Search
                        </button>
                        <button onClick={handleSearchToggle} className="mt-2 ml-2 text-gray-700">
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};
