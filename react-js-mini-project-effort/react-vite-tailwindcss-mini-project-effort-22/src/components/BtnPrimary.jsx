import React from 'react';

const BtnPrimary = ({btnPrimary,onClick,children}) => {
  return (
    <>
      <button onClick={onClick} className={`${btnPrimary}`}>{children}</button>
    </>
  );
}

export default BtnPrimary;
