import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';

const AnimatedSearchApp = () => {
    return (
        <>
            <AnimatedSearchBar />
        </>
    )
}

export default AnimatedSearchApp

const AnimatedSearchBar = () => {
    const [isSearchVisible, setSearchVisible] = useState(false);

    const searchAnimation = useSpring({
        width: isSearchVisible ? 200 : 0,
        opacity: isSearchVisible ? 1 : 0,
    });

    const toggleSearch = () => {
        setSearchVisible(!isSearchVisible);
    };

    return (
        <div className="flex items-center justify-end mt-4 bg-black text-white">
            <animated.input
                type="text"
                className="border px-2 py-1"
                style={searchAnimation}
                placeholder="Search..."
            />
            <button onClick={toggleSearch} className="ml-2">
                {isSearchVisible ? 'Hide' : 'Show'} Search
            </button>
        </div>
    );
};
