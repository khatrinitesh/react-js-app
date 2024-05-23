import React, { useState } from 'react';

const SortArrayNumApp = () => {
    const [numbersArr, setNumbersArr] = useState([5, 2, 8, 1, 3]);

    const btnSortAsc = () => {
        const sortAsc = [...numbersArr].sort((a, b) => a - b)
        setNumbersArr(sortAsc)
    }
    const btnSortDsc = () => {
        const sortAsc = [...numbersArr].sort((a, b) => b - a)
        setNumbersArr(sortAsc)
    }
    return (
        <div>
            <p>Original numbers: {numbersArr}</p>
            <button onClick={btnSortAsc}>Sort Asc</button>
            <button onClick={btnSortDsc}>Sort Dsc</button>
            <hr />

        </div>
    )
}

export default SortArrayNumApp
