import React from 'react';

const BtnPrimary = ({className,children,onClick}) => {
  return (
    <>
      <button className={`${className} text-white`} onClick={onClick}>
      {children}
    </button>
    </>
  );
}

export default BtnPrimary;
