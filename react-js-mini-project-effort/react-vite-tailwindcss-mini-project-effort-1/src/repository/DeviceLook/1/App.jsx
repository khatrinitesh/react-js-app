import React, { useState } from 'react';

const DeviceLookApp = () => {
    const [deviceStatus, setDeviceStatus] = useState('off');

    const toggleDevice = () => {
        setDeviceStatus((prevStatus) => (prevStatus === 'off' ? 'on' : 'off'));
      };
  return (
    <div>
      <div className={`device ${deviceStatus}`}>
      <h1>Device Status: {deviceStatus}</h1>
      <button onClick={toggleDevice}>Toggle Device</button>
    </div>
    </div>
  )
}

export default DeviceLookApp
