import React, { useState } from 'react'

const CustomApp = ({ data }) => {
    // use a state to keep track of whether to continue rendering or not
    const [shouldReader, setShouldRender] = useState(true);

    return (
        <div>
            {data.map((item) => {
                // Check a condition to determine whether to continue rendering
                if (!shouldRender) {
                    return null; // skip rendering
                }

                // Your rendering logic here
                return (
                    <div key={item.id}>
                        {/* Your item content */}
                    </div>
                );
            })}

            {/* Example button to stop rendering */}
            <button onClick={() => setShouldRender(false)}>
                Stop Rendering
            </button>
        </div>
    )
}

export default CustomApp
