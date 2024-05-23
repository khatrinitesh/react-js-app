import React, { useContext } from 'react';
import DataContext from './DataContext';

const ChildComp = () => {

    const {parentData,updateParentData}  = useContext(DataContext);

  return (
    <div>
      <p>Data from parent: {parentData}</p>
      <button onClick={updateParentData}>Update Parent Data</button>
    </div>
  )
}

export default ChildComp
