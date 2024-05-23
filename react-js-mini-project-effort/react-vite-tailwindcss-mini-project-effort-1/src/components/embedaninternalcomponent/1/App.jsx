import React, { useState } from "react";

const CustomApp = () => {
    const [showInternalComp, setShowInternalComp] = useState(false)

    const toggleInternalComp = () => {
        setShowInternalComp(!showInternalComp)
    }
    return (
        <>
            <button onClick={toggleInternalComp}>
                {showInternalComp ? "hide" : "show"} Internal Component
            </button>
            {showInternalComp && (<InternalComponent onClose={toggleInternalComp} />)}
        </>
    )
}

export default CustomApp

const InternalComponent = ({ onClose }) => {
    const [count, setCount] = useState(0)

    const btnInc = () => {
        setCount(count + 1)
    }
    return (
        <>
            <p>This is the internal component</p>
            <p>Count: {count}</p>
            <button onClick={btnInc}>Increment count</button>
            <button onClick={onClose}>&times;</button>
        </>
    )
}
