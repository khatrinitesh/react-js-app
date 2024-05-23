import React, { useState } from 'react';
import styled from 'styled-components';

const TabsContainer = styled.div`
  display: flex;
`;

const Tab = styled.div`
  padding: 15px;
  cursor: pointer;
  border: 1px solid #ccc;
  background-color: ${({ active }) => (active ? '#fff' : '#eee')};
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #fff;
  }
`;

const ContentContainer = styled.div`
  padding: 20px;
  border: 1px solid #ccc;
  margin-top: 10px;
  display: ${({ active }) => (active ? 'block' : 'none')};
`;


const HoverTabsApp = () => {
    const [activeTab, setActiveTab] = useState(3);

  const handleTabHover = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  const handleTabLeave = () => {
    setActiveTab(null);
  };

  return (
    <>
      <TabsContainer>
        <Tab onMouseEnter={() => handleTabHover(1)} onMouseLeave={handleTabLeave} active={activeTab === 1}>
          Tab 1
        </Tab>
        <Tab onMouseEnter={() => handleTabHover(2)} onMouseLeave={handleTabLeave} active={activeTab === 2}>
          Tab 2
        </Tab>
        <Tab onMouseEnter={() => handleTabHover(3)} onMouseLeave={handleTabLeave} active={activeTab === 3}>
          Tab 3
        </Tab>
      </TabsContainer>

      <ContentContainer active={activeTab === 1}>
        <p>Content for Tab 1</p>
      </ContentContainer>
      <ContentContainer active={activeTab === 2}>
        <p>Content for Tab 2</p>
      </ContentContainer>
      <ContentContainer active={activeTab === 3}>
        <p>Content for Tab 3</p>
      </ContentContainer> 
    </>
  )
}

export default HoverTabsApp
