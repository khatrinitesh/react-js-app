import React from 'react';

const BtnPrimary = ({label,onClick}) => {
  return (
    <>
      <button onClick={onClick} className='bg-red-600 text-white px-5 py-2 rounded-[10px]'>{label}</button>
    </>
  );
}

export default BtnPrimary;
