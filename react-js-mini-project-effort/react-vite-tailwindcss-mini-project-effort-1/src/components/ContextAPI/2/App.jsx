import React from 'react';
import ParentComponent from './Parent';
import { DataProvider } from './DataProvider';

const CustomApp = () => {
  return (
    <>
      <DataProvider>
      <div>
        <h1>Your App</h1>
        <ParentComponent />
      </div>
    </DataProvider>
    </>
  )
}

export default CustomApp

