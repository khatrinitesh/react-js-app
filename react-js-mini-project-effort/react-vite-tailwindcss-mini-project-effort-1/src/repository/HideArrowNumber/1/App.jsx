import React from 'react'

const HideArrowNumberApp = () => {
    return (
        <>
            <input
                type="number"
                style={{ appearance: 'none', MozAppearance: 'textfield' }}
            // ... other input props
            />
        </>
    )
}

export default HideArrowNumberApp
