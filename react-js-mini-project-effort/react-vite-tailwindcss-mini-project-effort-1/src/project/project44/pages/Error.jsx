import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <>
            <div class="error-container h-[100vh] flex items-center justify-center flex-col bg-purple-300">
                <h1 class="error-code">404</h1>
                <p class="error-message">Oops! Page not found.</p>
                <Link to="/" class="back-to-home">Back to Home</Link>
            </div>
        </>
    )
}

export default Error
