import React, { useState } from 'react';
import styled from 'styled-components';

const TabsContainer = styled.div`
  display: flex;
`;

const Tab = styled.div`
  padding: 10px;
  cursor: pointer;
  border: 1px solid #ccc;
  margin-right: 5px;
  opacity: ${({ active }) => (active ? 1 : 0.7)};
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 1;
  }
`;

const ContentContainer = styled.div`
  padding: 20px;
  border: 1px solid #ccc;
`;


const TabHeadersApp = () => {
    const [activeTab, setActiveTab] = useState(1);

    const handleTabClick = (tabIndex) => {
      setActiveTab(tabIndex);
    };

    
  return (
    <>
       <TabsContainer>
        <Tab active={activeTab === 1} onClick={() => handleTabClick(1)}>
          Tab 1
        </Tab>
        <Tab active={activeTab === 2} onClick={() => handleTabClick(2)}>
          Tab 2
        </Tab>
        <Tab active={activeTab === 3} onClick={() => handleTabClick(3)}>
          Tab 3
        </Tab>
      </TabsContainer>
      <ContentContainer>
        <p style={{ display: activeTab === 1 ? 'block' : 'none' }}>Content for Tab 1</p>
        <p style={{ display: activeTab === 2 ? 'block' : 'none' }}>Content for Tab 2</p>
        <p style={{ display: activeTab === 3 ? 'block' : 'none' }}>Content for Tab 3</p>
      </ContentContainer>
    </>
  )
}

export default TabHeadersApp
