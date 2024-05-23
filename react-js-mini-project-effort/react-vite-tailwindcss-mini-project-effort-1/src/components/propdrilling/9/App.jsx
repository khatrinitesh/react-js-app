import React from 'react';

const CustomApp = () => {
    const finalData = 'Lorem nisi sunt deserunt aliqua mollit ipsum aliqua sit.' 
    const dataResult233 = 'Quis non consectetur nulla aute incididunt do adipisicing magna deserunt aute.'
  return (
    <div>
      <FirstChild dataResult={finalData} dataResult2={dataResult233}/>
    </div>
  )
}

export default CustomApp


const FirstChild = ({dataResult,dataResult2}) => {
    return(
        <>
        <SecondChild dataResult={dataResult} dataResult2={dataResult2}/>
        </>
    )
}
const SecondChild = ({dataResult,dataResult2}) => {
    return(
        <>
        <ThirdChild dataResult={dataResult} dataResult2={dataResult2}/>
        </>
    )
}
const ThirdChild = ({dataResult,dataResult2}) => {
    return(
        <>
            <p>Data Result:{dataResult} <br /> {dataResult2}</p>
        </>
    )
}