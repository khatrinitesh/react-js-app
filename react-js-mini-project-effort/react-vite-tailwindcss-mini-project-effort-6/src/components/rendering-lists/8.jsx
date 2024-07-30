import React, { useState } from 'react'

const ConditionalRendering = () => {
    const daysOfWeek = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
    const [status,setStatus] = useState('tuesday');

    const renderData = () => {
        switch(status) {
            case 'monday' : return <p>Monday</p>;
            case 'tuesday' : return <p>tuesday</p>;
            case 'wednesday' : return <p>wednesday</p>;
            case 'thursday' : return <p>thursday</p>;
            case 'friday' : return <p>friday</p>;
            case 'saturday' : return <p>saturday</p>;
            case 'sunday' : return <p>sunday</p>;
            default: return null;
        }
    }

    const handleNextDay =() => {
        const currentIndex = daysOfWeek.indexOf(status);
        const nextIndex = (currentIndex + 1) % daysOfWeek.length;
        setStatus(daysOfWeek[nextIndex])
    }

    
  return (
    <div>
      {renderData()}
      <button onClick={handleNextDay}>Click next</button>
    </div>
  )
}

export default ConditionalRendering
