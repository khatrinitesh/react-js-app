import React from 'react';

const BtnPrimary = ({onClick,children,btnStyle}) => {
  return (
    <>
      <button className={`${btnStyle} btn`} onClick={onClick}>{children}</button>
    </>
  );
}

export default BtnPrimary;
