import React, { useState } from 'react';

const ConditionalAttributes = () => {
    const [isDisabled,setIsDisabled] = useState(false);

    
  return (
    <div>
        <button onClick={() => setIsDisabled(!isDisabled)} style={{marginBottom:'10px'}}>
            toggle disable
        </button>
        <button disabled={isDisabled} aria-label="submit" style={{display:isDisabled ? 'none' : 'block',color:'white'}}>Happy</button>
    </div>
  );
}

export default ConditionalAttributes;
