import React, { useState } from 'react';

const ToggleSwitchApp = () => {
    const [isToggled, setIsToggled] = useState(false);

    const handleToggleChange = (newState) => {
        setIsToggled(newState)
    }
  return (
    <>
      <ToggleSwitch isChecked={isToggled} onChange={handleToggleChange}/>
    </>
  )
}

export default ToggleSwitchApp

const ToggleSwitch = ({ isChecked, onChange }) => {
    const handleToggleChange = () => {
      onChange(!isChecked);
    };
  
    return (
      <label>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleToggleChange}
        />
        Toggle Switch
      </label>
    );
  };
