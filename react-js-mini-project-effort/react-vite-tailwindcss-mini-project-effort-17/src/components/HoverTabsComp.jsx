import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const HoverTabsComp = () => {
  return (
    <>
      <HoverTabs/>
    </>
  );
}

export default HoverTabsComp;

// Container for the Tabs
const TabContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`;

// Styled Component for each individual Tab
const Tab = styled(motion.div)`
  padding: 15px 30px;
  background-color: #333;
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  border-radius: 25px;
  margin: 0 10px;
  cursor: pointer;
  text-align: center;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  /* Hover effects */
  &:hover {
    background-color: #555;
  }
`;

// Underline Effect
const Underline = styled(motion.div)`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background-color: #ff5733;
  transform: scaleX(0);
  transform-origin: bottom right;
  transition: transform 0.3s ease;
`;

// Styled Component for the Tab Content
const TabContent = styled.div`
  padding: 20px;
  background-color: #f4f4f4;
  border-radius: 8px;
  margin-top: 20px;
  text-align: center;
  font-size: 20px;
  display: ${({ show }) => (show ? 'block' : 'none')};
`;

const HoverTabs = () => {
    const [activeTab, setActiveTab] = useState(0);
  
    return (
      <div>
        <TabContainer>
          {/* Tab 1 */}
          <Tab
            onHoverStart={() => setActiveTab(0)}
            whileHover={{ scale: 1.1, y: -5 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            Tab 1
            <Underline
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ type: 'spring', stiffness: 300 }}
            />
          </Tab>
          {/* Tab 2 */}
          <Tab
            onHoverStart={() => setActiveTab(1)}
            whileHover={{ scale: 1.1, y: -5 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            Tab 2
            <Underline
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ type: 'spring', stiffness: 300 }}
            />
          </Tab>
          {/* Tab 3 */}
          <Tab
            onHoverStart={() => setActiveTab(2)}
            whileHover={{ scale: 1.1, y: -5 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            Tab 3
            <Underline
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ type: 'spring', stiffness: 300 }}
            />
          </Tab>
        </TabContainer>
  
        {/* Tab Content */}
        <TabContent show={activeTab === 0}>
          Content for Tab 1
        </TabContent>
        <TabContent show={activeTab === 1}>
          Content for Tab 2
        </TabContent>
        <TabContent show={activeTab === 2}>
          Content for Tab 3
        </TabContent>
      </div>
    );
  };
  
