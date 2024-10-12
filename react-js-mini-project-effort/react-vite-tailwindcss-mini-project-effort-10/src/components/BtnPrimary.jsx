import React from 'react';

const BtnPrimary = ({children,onClick}) => {
  return (
    <>
      <button className='btnPrimary' onClick={onClick}>{children}</button>
    </>
  );
}

export default BtnPrimary;
