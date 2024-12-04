import React, { useDeferredValue, useState } from 'react';

const HooksuseDeferredValue = () => {
  return (
    <>
      <DeferredValueExample/>
    </>
  );
}

export default HooksuseDeferredValue;

export const DeferredValueExample = () => {
    const [query,setQuery] = useState('');
    const items = Array.from({length:30},(_,i) => `Item ${i + 1}`);

    const deferredQuery = useDeferredValue(query);


    const filteredItems = items.filter((item) => item.toLowerCase().includes(deferredQuery.toLowerCase()))

    return(
        <>
         <input type="text" value={query} placeholder='search items...' onChange={(e) => setQuery(e.target.value)} />
         {query !== deferredQuery && <p>Loading...</p>}
         <ul>
            {filteredItems.map((item,index) => (
                <li key={index}>{item}</li>
            ))}
         </ul>
        </>
    )
}
