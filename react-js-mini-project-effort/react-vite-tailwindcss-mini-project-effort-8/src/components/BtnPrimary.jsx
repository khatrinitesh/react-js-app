import React from 'react';

const BtnPrimary = ({label,onClick}) => {
  return (
    <>
      <button onClick={onClick} className='px-2 py-2 font-bold bg-red-300 rounded-[10px]'>{label}</button>
    </>
  );
}

export default BtnPrimary;
