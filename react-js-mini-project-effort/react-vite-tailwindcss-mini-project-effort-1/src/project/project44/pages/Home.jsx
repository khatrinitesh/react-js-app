import React from 'react';
import Banner from "../components/Banner";

const Home = ({ style }) => {
    return (
        <div className={`${style} w-full`}>
            <Banner title="Home" desc="Lorem Ipsum" />
        </div>
    )
}

export default Home
