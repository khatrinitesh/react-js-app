import React from 'react';

const CustomApp = () => {

    const array1 = [1, 2, 3];
    const array2 = [4, 5, 6];
    const array3 = [7, 8, 9];
  
    // Join arrays using concat method
    const joinedArray = array1.concat(array2, array3);
  return (
    <div>
        {/* this is joined array */}
      {JSON.stringify(joinedArray)}
    <hr/>
      {/* this is original array */}
      {JSON.stringify(array1)}
      {JSON.stringify(array2)}
      {JSON.stringify(array3)}
    </div>
  )
}

export default CustomApp
