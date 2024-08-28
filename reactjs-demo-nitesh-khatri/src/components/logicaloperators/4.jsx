import React, { useState } from 'react';

const Example = () => {
  return (
    <>
    <ConditionalRender/>
    </>
  );
}

export default Example;

const ConditionalRender = () => {
    const [isLoggedIn,setIsLoggedIn] = useState(true);
    const [hasNotification,setHasNotification] = useState(false);

    return(
        <>
        {isLoggedIn ? (
            <>
            <p>Welcome back!</p>
             {hasNotification ? (
                <>
                <p>You have new notifications.</p>
                </>
             ) : (
                <p>please login to see your notifications</p>
             )}
            </>
        ): (
            <p>please login to access the app.</p>
        )}
        </>
    )
}