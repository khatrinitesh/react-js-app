import React, { useState } from 'react';

const CustomApp = () => {

    // state to hold the input value
    const [mainString, setMainString] = useState('')
    const [searchString, setSearchString] = useState('')
    const [replaceString, setReplaceString] = useState('');

    // function to handle input changes 
    const handleMainStringChange = (e) => {
        setMainString(e.target.value)
    }

    const handleSearchStringChange = (e) => {
        setSearchString(e.target.value)
    }

    const handleReplaceStringChange = (e) => {
        setReplaceString(e.target.value)
    }

    const handleReplace = () => {
        const modifiedString = mainString.replace(searchString, replaceString)
        console.log(`Modified String: ${modifiedString}`)
    }
    return (
        <>
            <label>
                Enter the main string:
                <input
                    type="text"
                    value={mainString}
                    onChange={handleMainStringChange}
                />
            </label>
            <br />
            <label>
                Enter the substring to replace:
                <input
                    type="text"
                    value={searchString}
                    onChange={handleSearchStringChange}
                />
            </label>
            <br />
            <label>
                Enter the replacement string:
                <input
                    type="text"
                    value={replaceString}
                    onChange={handleReplaceStringChange}
                />
            </label>
            <br />
            <button onClick={handleReplace}>Replace Substring</button>
        </>
    )
}

export default CustomApp
