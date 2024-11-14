import { motion } from 'framer-motion';
import styled from 'styled-components';

// Styled Component for the draggable element
const DraggableBox = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: #6a11cb;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  font-weight: bold;
  border-radius: 12px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
  cursor: grab;
  user-select: none;

  &:active {
    cursor: grabbing;
  }
`;


const DraggableElementComp = () => {
  return (
    <>
      <DraggableElement/>
    </>
  );
}

export default DraggableElementComp;

const DraggableElement = () => {
    return (
      <div style={{ padding: '50px' }}>
        <DraggableBox
          drag
          dragConstraints={{ left: 0, right: 300, top: 0, bottom: 300 }} // Optional constraints for dragging
          whileHover={{ scale: 1.05 }} // Optional hover animation
          whileTap={{ scale: 0.95 }}  // Optional click effect
        >
          Drag me!
        </DraggableBox>
      </div>
    );
  };
