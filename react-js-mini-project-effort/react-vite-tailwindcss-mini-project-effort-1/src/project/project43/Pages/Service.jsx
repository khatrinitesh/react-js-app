import React, { useState, useEffect } from 'react';
import Banner from '../Components/Banner';
import ItemList from './ItemList';

const Service = () => {

    return (
        <div className='content w-full'>
            <Banner title="Service" desc="Lorem Ipsum" />
            <ItemList />
        </div>
    )
}

export default Service
