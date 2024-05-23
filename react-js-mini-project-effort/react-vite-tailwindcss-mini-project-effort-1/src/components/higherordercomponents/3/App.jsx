import React from 'react'

const CustomApp = () => {
    const numbers = [1, 2, 3, 4, 5];


    // using custom map
    const mappedNum = CustomMap(numbers,(num) => num *2);


    // using custom reduce 
    const reduceNum = CustomReduce(numbers,(a,b) => a+b,0)

    // using custom filter
    const filteredNum = CustomFilter(numbers,(num) => num % 2 === 0);

    // using custom sort 
    const SortNum = CustomSort(numbers,(a,b) => b-a)
  return (
    <>
      <h2>Mapped numbers: {mappedNum.join(', ')}</h2>
      <h2>Reduce numbers: {reduceNum}</h2>
      <h2>Filtered numbers: {filteredNum}</h2>
      <h2>Sort numbers: {SortNum}</h2>
    </>
  )
}

export default CustomApp

const CustomMap = (array,callback) => {
    const result = [];
    for(let i=0;i<array.length;i++){
        result.push(callback(array[i],i,array));
    }
    return result;
}

const CustomReduce = (array,callback,initialVal)=> {
    let accmulator = initialVal !== undefined ? initialVal : array[0];
    const startIndex = initialVal !== undefined ? 0 : 1;

    for(let i=startIndex;i<array.length;i++){
        accmulator = callback(accmulator,array[i],i,array);
    }
    return accmulator;
}

const CustomFilter = (array,callback) => {
    const result = []
    for(let i=0;i<array.length;i++){
        if(callback(array[i],i,array)){
            result.push(array[i]);
        }
    }
    return result;
}

const CustomSort = (array,compareFunction) => {
    const result = [...array];
    return result.sort(compareFunction)
}
