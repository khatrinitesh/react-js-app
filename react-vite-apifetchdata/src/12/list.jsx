import React, { useState, useEffect } from 'react';
import UseTable from './UseTable';

// Component using the custom hook to display table data
const List = () => {
    const { data, loading, error } = UseTable();
    const [sortOrders, setSortOrders] = useState({
        name: 'asc',
        username: 'asc',
        email: 'asc',
        website: 'asc'
    });
    const [sortData, setSortData] = useState([...data]);

    useEffect(() => {
        // Sort the data based on the sorting order for each column
        const sorted = [...data].sort((a, b) => {
            for (let key in sortOrders) {
                if (a[key] !== b[key]) {
                    // Compare the values of the current column
                    if (sortOrders[key] === 'asc') {
                        return a[key].localeCompare(b[key]);
                    } else {
                        return b[key].localeCompare(a[key]);
                    }
                }
            }
            return 0;
        });
        setSortData(sorted);
    }, [data, sortOrders]);
    

    const toggleSortOrder = (column) => {
        setSortOrders(prevState => ({
            ...prevState,
            [column]: prevState[column] === 'asc' ? 'desc' : 'asc'
        }));
    };

    if (loading) {
        return (
            <div>Loading...</div>
        );
    }
    if (error) {
        return (
            <div>Error: {error.message}</div>
        );
    }

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th onClick={() => toggleSortOrder('name')}>Name</th>
                        <th onClick={() => toggleSortOrder('username')}>Username</th>
                        <th onClick={() => toggleSortOrder('email')}>Email</th>
                        <th onClick={() => toggleSortOrder('website')}>Website</th>
                    </tr>
                </thead>
                <tbody>
                    {sortData.map((item, index) => (
                        <tr key={index}>
                            <td>{item.name}</td>
                            <td>{item.username}</td>
                            <td>{item.email}</td>
                            <td>{item.website}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default List;
