import React from 'react';
import Banner from '../Components/Banner';


const Error = () => {
    return (
        <div className='errorContent min-h-[100vh]'>
            <Banner title="page not found" style="fixed inset-0 flex items-center justify-center bg-[lightgreen]" />
        </div>
    )
}

export default Error
