import React, { useState } from 'react';
import DataContext from './DataContext';

const DataProvider = ({children}) => {

    const [parentData,setParentData] = useState('data from parent');

    const updateParentData  =() => {
        setParentData('updated data from parent')
    }


  return (
    <DataContext.Provider value={{parentData,updateParentData}}>
        {children}
    </DataContext.Provider>
  )
}

export default DataProvider
