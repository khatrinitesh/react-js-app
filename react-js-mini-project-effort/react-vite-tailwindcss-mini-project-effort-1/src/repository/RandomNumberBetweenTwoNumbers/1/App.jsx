import React, { useState } from 'react';

const RandomNumbersApp = () => {
    return (
        <>
            <RandomNumGen />
        </>
    )
}

export default RandomNumbersApp

const RandomNumGen = () => {

    const [min, setMin] = useState(1)
    const [max, setMax] = useState(100)
    const [randomNum, setRandomNum] = useState(null);

    const generateRandomNumber = () => {
        const randomVal = Math.floor(Math.random() * (max - min + 1)) + min
        setRandomNum(randomVal)
    }


    return (
        <>
            <label>
                Min:
                <input type="number" value={min} onChange={(e) => setMin(Number(e.target.value))} />
            </label>
            <br />
            <label>
                Max:
                <input type="number" value={max} onChange={(e) => setMax(Number(e.target.value))} />
            </label>
            <br />
            <button onClick={generateRandomNumber}>Generate Random Number</button>
            <br />
            {randomNum !== null && (
                <p>
                    Random Number between {min} and {max}: {randomNum}
                </p>
            )}

        </>
    )
}


