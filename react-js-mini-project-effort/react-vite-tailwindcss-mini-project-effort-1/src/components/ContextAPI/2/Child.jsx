import React from 'react';
import { useData } from './DataProvider';

const ChildComponent = () => {
    const { sharedData, setSharedData } = useData();
  
    const handleClick = () => {
      const updatedData = sharedData + ' - Updated in Child Component';
      setSharedData(updatedData);
    };
  
    return (
      <div>
        <h3>Child Component</h3>
        <p>Data from Context: {sharedData}</p>
        <button onClick={handleClick}>Update Data</button>
      </div>
    );
  };
export default ChildComponent
