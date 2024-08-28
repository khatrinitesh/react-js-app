import React from 'react';

const PassingPropsCustom = () => {

    const handleClick= ()=> {
        alert('clicked')
    }
  return (
    <>
     <CustomBtn onClick={handleClick} text="button clicked" color="red" size="large"/> 
    </>
  );
}

export default PassingPropsCustom;


const CustomBtn = ({ text, onClick, color = 'blue', size = 'medium' }) => {

    const styles = {
        backgroundColor:color,
        padding:size === 'large' ? '15px' : '10px',
        color:'white',
        border:'none',
        borderRadius:'5px',
        cursor:'pointer'
    }
    return(
        <>
        <button style={styles} onClick={onClick}>{text}</button>
        </>
    )
}