import React from 'react';

const PrintComp = () => {
    const handlePrint = () => {
        window.print();
      };
    
  return (
    <>
       <h1>Printable Content</h1>
      <p>This content will be printed when you click the button.</p>
      <button onClick={handlePrint}>Print this page</button>
    </>
  );
}

export default PrintComp;
