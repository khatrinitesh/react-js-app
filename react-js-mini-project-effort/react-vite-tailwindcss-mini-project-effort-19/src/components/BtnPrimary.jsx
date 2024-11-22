import React from 'react';

const BtnPrimary = ({btnStyle,onClick,children}) => {
  return (
    <>
      <button className={`${btnStyle} bg-blue-400 px-[20px] py-[10px] rounded-[10px] font-bold`} onClick={onClick}>{children}</button>
    </>
  );
}

export default BtnPrimary;
