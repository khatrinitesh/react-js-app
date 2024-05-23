import React from 'react'

const ComingSoonApp = () => {
    return (
        <>
            <ComingSoonPage />
        </>
    )
}

export default ComingSoonApp

const ComingSoonPage = () => {
    // Set your target date and time
    const targetDate = new Date('2023-01-01T00:00:00').getTime();

    return (
        <div className="coming-soon-container">
            <h1>Coming Soon</h1>
            <p>We are working hard to bring you something awesome!</p>
        </div>
    );
};
