import React from 'react';
import { motion } from 'framer-motion';

const blobs = [1,2,3]


const AuroraComp = () => {
    return(
        <>
        <Example/>
        </>
    )
}


export default AuroraComp;


const Example = () => {

  return (
    <>
        <div className="aurora-container">
        {blobs.map((id) => (
        <motion.div
          key={id}
          className={`blob blob-${id}`}
          animate={{
            x: ["0%", "10%", "-10%", "0%"],
            y: ["0%", "-10%", "10%", "0%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
        </div>      
    </>
  );
}
