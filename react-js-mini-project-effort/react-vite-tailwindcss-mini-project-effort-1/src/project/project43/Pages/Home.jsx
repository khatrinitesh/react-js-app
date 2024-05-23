import React from 'react'
import Banner from '../Components/Banner';
import MapSortReduceApp from '../Components/MapSortReduce/1';

const Home = () => {
    return (
        <div className='content w-full'>
            <Banner title="Home" desc="Lorem Ipsum" />
            <MapSortReduceApp />
        </div>
    )
}

export default Home
