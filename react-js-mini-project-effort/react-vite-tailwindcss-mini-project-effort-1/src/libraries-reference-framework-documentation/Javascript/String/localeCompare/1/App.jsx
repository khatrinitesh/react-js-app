import { result } from 'lodash';
import React, { useState } from 'react';

const CustomApp = () => {
    // state to hold the input values 
    const [s1, setS1] = useState('')
    const [s2, setS2] = useState('')

    // function to handle the input change 
    const handleS1Change = (e) => {
        setS1(e.target.value)
    }

    const handleS2Change = (e) => {
        setS2(e.target.value)
    }

    // Function to compare strings using localeCompare
    const compareStrings = () => {
        const comparisonResult = s1.localeCompare(s2);
        let resultMsg;

        if (comparisonResult < 0) {
            resultMsg = 'String1 comes before string 2'
        }
        else if (comparisonResult > 0) {
            resultMsg = 'String1 comes before string 2'
        }
        else {
            resultMsg = 'String1 is equal to string 2'
        }
        console.log(resultMsg)
    }


    return (
        <>
            <label>
                Enter the first string:
                <input
                    type="text"
                    value={s1}
                    onChange={handleS1Change}
                />
            </label>
            <br />
            <label>
                Enter the second string:
                <input
                    type="text"
                    value={s2}
                    onChange={handleS2Change}
                />
            </label>
            <br />
            <button onClick={compareStrings}>Compare Strings</button>
        </>
    )
}

export default CustomApp
