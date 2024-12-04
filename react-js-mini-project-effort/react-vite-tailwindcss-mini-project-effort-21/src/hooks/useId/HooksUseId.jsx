import React, { useId } from 'react';

const HooksUseId = () => {
    const id =useId();
    const id2 =useId();
  return (
    <>
      <div>
        <label htmlFor={id}>Enter your name</label>
        <input type="text" id={id} />
      </div>
      <div>
        <label htmlFor={id2}>Enter your name</label>
        <input type="text" id={id2} />
      </div>
    </>
  );
}

export default HooksUseId;
