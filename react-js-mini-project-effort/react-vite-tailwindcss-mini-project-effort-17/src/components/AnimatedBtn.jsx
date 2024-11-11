import React,{useState } from 'react';
import { motion } from 'framer-motion';

const AnimatedBtn = () => {
  return (
    <>
      <AnimatedButton/>
    </>
  );
}

export default AnimatedBtn;

const AnimatedButton = () => {
    const [loading, setLoading] = useState(false);
  
    const handleClick = () => {
      setLoading(true);
      setTimeout(() => setLoading(false), 3000); // Simulate a loading process
    };
  
    return (
      <motion.button
        onClick={handleClick}
        whileHover={{ scale: 1.1 }}
        className="relative px-6 py-3 bg-blue-500 text-white rounded-md shadow-lg"
      >
        {loading ? (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-6 h-6 border-4 border-t-transparent border-white border-solid rounded-full animate-spin" />
          </div>
        ) : (
          'Click Me'
        )}
      </motion.button>
    );
  };

// const AnimatedButton = () => {
//     const [ripple, setRipple] = useState(false);
  
//     const handleRipple = () => {
//       setRipple(true);
//       setTimeout(() => setRipple(false), 1000); // Reset ripple after animation completes
//     };
  
//     return (
//       <motion.button
//         onClick={handleRipple}
//         whileHover={{ scale: 1.1 }}
//         whileTap={{ scale: 0.9 }}
//         transition={{ type: 'spring', stiffness: 300 }}
//         className="relative overflow-hidden px-6 py-3 bg-blue-500 text-white rounded-md shadow-lg"
//       >
//         {ripple && (
//           <motion.div
//             initial={{ scale: 0 }}
//             animate={{ scale: 4 }}
//             exit={{ scale: 0 }}
//             className="absolute inset-0 bg-white rounded-full opacity-30"
//           />
//         )}
//         Click Me
//       </motion.button>
//     );
//   };
  
