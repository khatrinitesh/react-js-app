import React from 'react';
import { motion } from "framer-motion";

const Body = ({ children, delay = 0 }) => {
    return (
        <div className='body-container'>
            <motion.p
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "-100%" }}
                transition={{ duration: 0.5, delay }}
            >
                {children}
            </motion.p>
        </div>
    )
}

export default Body
