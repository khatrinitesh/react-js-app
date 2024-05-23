import React, { useState } from 'react'

const ExponentiationApp = () => {
    const [base, setBase] = useState(2);
    const [exponent, setExponent] = useState(3);


    const result = base ** exponent;


    const handleBaseChange = (e) => {
        setBase(Number(e.target.value))
    }

    const handleExponentChange = (e) => {
        setExponent(e.target.value)
    }

    return (
        <>
            <label>
                Base:
                <input type="number" value={base} onChange={handleBaseChange} />
            </label>
            <label>
                Base:
                <input type="number" value={exponent} onChange={handleExponentChange} />
            </label>
            <br />
            <p>
                {base} to the power of {exponent} is: {result}
            </p>
        </>
    )
}

export default ExponentiationApp
