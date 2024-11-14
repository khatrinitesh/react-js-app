import React, { useState } from 'react';

const CheckCheckboxComp = () => {
    const [customChk,setCustomChk] = useState(false)

    const handleToggle = () => {
        setCustomChk(!customChk)
    }
  return (
    <div className='grid gap-[20px]'>
        <label>
            addasd
            <input type="checkbox" value="customChk" onChange={handleToggle} />
     
        </label>
        <br />
        {customChk ? 'yes' : null}
      
    </div>
  );
}

export default CheckCheckboxComp;
