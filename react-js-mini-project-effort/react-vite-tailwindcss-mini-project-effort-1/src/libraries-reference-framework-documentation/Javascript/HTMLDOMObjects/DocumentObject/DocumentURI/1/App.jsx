import React from 'react'

const CustomApp = () => {
    // accessing the current URI
    const currentURI = window.location.href;

    // implementing logic based on the URI
    let renderContent;

    if (currentURI.includes('/some-path')) {
        renderContent = <p>this is content for /some-path</p>
    }
    else if (currentURI.includes('/another-path')) {
        renderContent = <p>this is the default content</p>
    }
    else {
        renderContent = <p>this is the default content</p>
    }
    return (
        <div>
            {renderContent}
        </div>
    )
}

export default CustomApp
