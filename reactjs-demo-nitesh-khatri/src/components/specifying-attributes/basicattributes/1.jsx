import React from 'react';

const BasicAttributes = () => {
  return (
    <div>
      <input type="text" placeholder="enter your name" maxLength={50} required/>
      <button type='submit' style={{backgroundColor:'blue',color:'white'}} onClick={() => alert('button clicked')}>submit</button>
    </div>
  );
}

export default BasicAttributes;
