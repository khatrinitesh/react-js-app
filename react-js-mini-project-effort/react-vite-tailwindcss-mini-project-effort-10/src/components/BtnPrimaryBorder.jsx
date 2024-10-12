import React from 'react';

const BtnPrimaryBorder = ({children,onClick}) => {
  return (
    <>
      <button className='bg-purple-600 text-white px-4 py-2' onClick={onClick}>{children}</button>
    </>
  );
}

export default BtnPrimaryBorder;
