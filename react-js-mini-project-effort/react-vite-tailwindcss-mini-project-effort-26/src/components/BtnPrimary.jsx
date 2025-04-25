import React from 'react';

const BtnPrimary = ({btnClick,children,btnStyle}) => {
  return (
    <>
      <button onClick={btnClick} className={`${btnStyle} btnPrimary`}>{children}</button>
    </>
  );
}

export default BtnPrimary;
