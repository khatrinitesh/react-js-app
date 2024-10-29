import React from 'react';

const BtnPrimary = ({btnStyle,children,onClick}) => {
  return (
    <>
      <button onClick={onClick} className={`${btnStyle} btnContent`}>{children}</button>
    </>
  );
}

export default BtnPrimary;
