import React, { useState } from 'react';

const CustomApp = () => {
    const [data, setData] = useState([
        { id: 1, name: 'John' },
        { id: 2, name: 'Alice' },
        { id: 3, name: 'Bob' },
        { id: 4, name: 'Charlie' },
    ])

    const sortData = (property, order) => {
        const sortedData = [...data].sort((a, b) => {
            const aValue = a[property]
            const bValue = b[property]

            if (aValue < bValue) return order === 'asc' ? -1 : 1
            if (aValue > bValue) return order === 'dsc' ? 1 : -1
        })
        setData(sortedData)
    }

    return (
        <>
            <h2>Sortable List</h2>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(item => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div>
                <button onClick={() => sortData('name', 'asc')}>Sort by Name (Asc)</button>
                <button onClick={() => sortData('name', 'desc')}>Sort by Name (Desc)</button>
            </div>
        </>
    )
}

export default CustomApp
