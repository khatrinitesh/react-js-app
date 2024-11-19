import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const HowDisableResizeGrabberComp = () => {
  return (
    <>
      <DisabledResizeComponent/>
    </>
  );
}

export default HowDisableResizeGrabberComp;

// Styled component for a resizable div (resize grabber disabled)
const ResizableBox = styled(motion.textarea)`
  width: 300px;
  height: 200px;
  background-color: #3498db;
  border-radius: 10px;
  padding: 20px;
  color: #fff;
  font-size: 18px;
  text-align: center;

  /* Disable resize grabber */
  resize: none;

  /* Optional: prevent any resizing functionality (keeping it fixed) */
  overflow: hidden; /* Keeps the content inside the box if resizing is tried */

  /* Adding box-shadow for visual enhancement */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

const DisabledResizeComponent = () => {
  return (
    <div>
      <ResizableBox
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Resizing is Disabled
      </ResizableBox>
    </div>
  );
};

