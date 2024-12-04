import React, { forwardRef, useImperativeHandle, useRef } from 'react';

const HooksUseImperativeHandle = () => {
    const inputRef = useRef();

  return (
    <>
      <CustomInput ref={inputRef}/>
      <button onClick={() => inputRef.current.focusInput()}>Focus Input</button>
      <button onClick={() => inputRef.current.clearInput()}>Clear Input</button>
    </>
  );
}

export default HooksUseImperativeHandle;

const CustomInput = forwardRef((props,ref) => {
    const inputRef = useRef();


    useImperativeHandle(ref,() => ({
        focusInput:() => {
            inputRef.current.focus(); // method to focus the input
        },
        clearInput:() => {
            inputRef.current.value = ''; // method to clear the input
        }
    }));

    return(
        <>
         <input type="text" ref={inputRef} placeholder='type something....' />
        </>
    )
})
