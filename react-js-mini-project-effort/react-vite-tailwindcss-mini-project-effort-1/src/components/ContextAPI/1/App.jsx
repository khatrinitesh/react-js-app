import React from 'react';
import DataProvider from './DataProvider';
import ParentComp from './Parent';

const CustomApp = () => {
  return (
    <DataProvider>
      <div>
      <h1>App Component</h1>
        <ParentComp />
      </div>
    </DataProvider>
  )
}

export default CustomApp