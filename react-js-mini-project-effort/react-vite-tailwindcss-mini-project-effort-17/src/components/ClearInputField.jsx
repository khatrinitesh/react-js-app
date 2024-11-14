import React, { useState } from "react";
import { motion } from "framer-motion";

const ClearInputField = () => {
  return (
    <>
     <ClearableInput/> 
    </>
  );
}

export default ClearInputField;

const ClearableInput = () => {

    const [value,setValue] = useState('');
    const [isClearing,setIsClearing] = useState(false);

    const handleClear = () => {
        setIsClearing(true);
        setTimeout(() => {
            setValue('');
            setIsClearing(false);
        })
    }
    return(
        <>
        <motion.input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Enter text"
        className="input-field"
        animate={{
          opacity: isClearing ? 0 : 1, // Fade out when clearing
          scale: isClearing ? 0.95 : 1, // Shrink slightly while clearing
        }}
        transition={{ duration: 0.3 }}
      />
        <button onClick={handleClear}>Clear Input Field</button>
        </>
    )
}
