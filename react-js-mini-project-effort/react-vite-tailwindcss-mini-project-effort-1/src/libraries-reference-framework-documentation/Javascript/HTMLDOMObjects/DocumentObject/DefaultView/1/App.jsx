import React, { useState, useEffect } from 'react';

const CustomApp = () => {

    const [defaultView, setDefaultView] = useState('table'); // Replace 'table' with your desired default view

    useEffect(() => {
        // Your logic to fetch data or perform any initial actions

        // After fetching data or performing initial actions, set the default view
        // For example, if you want to set it to 'list' after fetching data
        // setDefaultView('list');

        // You can also perform other initialization actions here

    }, []); // The empty dependency array ensures that this effect runs only once after the initial render

    return (
        <>
            <div>
                {/* Your component rendering based on the defaultView state */}
                {defaultView === 'table' && <TableView />}
                {defaultView === 'list' && <ListView />}
                {/* Add more views as needed */}
            </div>
        </>
    )
}

export default CustomApp
