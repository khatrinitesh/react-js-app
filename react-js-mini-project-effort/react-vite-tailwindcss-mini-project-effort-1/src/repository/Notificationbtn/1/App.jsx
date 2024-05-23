import React, { useState } from 'react';
import './style.css'

const NotificationBtnApp = () => {
    const [showNotification, setShowNotification] = useState(false);
    const handleButtonClick = () => {
        setShowNotification(true);
        // Simulate hiding the notification after 3 seconds
        setTimeout(() => {
          setShowNotification(false);
        }, 3000);
      };
  return (
    <>
      <div className="notification-container">
        <button className="notification-button" onClick={handleButtonClick}>
            Show Notification
        </button>
        {showNotification && (
                <div className="notification">
                <p>This is a notification!</p>
            </div>
        )}
        </div>
    </>
  )
}

export default NotificationBtnApp
