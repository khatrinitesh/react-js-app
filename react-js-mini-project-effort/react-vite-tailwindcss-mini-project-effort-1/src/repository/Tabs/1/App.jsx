import React, { useState } from 'react';
import styled from 'styled-components';

const TabContainer = styled.div`
  display: flex;
  border-bottom: 1px solid #ccc;
`;

const Tab = styled.div`
  padding: 10px;
  cursor: pointer;
  border: 1px solid #ccc;
  border-bottom: none;
  background-color: ${({ active }) => (active ? '#fff' : '#eee')};
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #fff;
  }
`;

const ContentContainer = styled.div`
  padding: 20px;
  border: 1px solid #ccc;
  margin-top: -1px;
  display: ${({ active }) => (active ? 'block' : 'none')};
  transition: max-height 0.3s ease-in-out;
  overflow: hidden;
`;

const TabsApp = () => {
    const [activeTab, setActiveTab] = useState(1);

    const handleTabClick = (tabIndex) => {
        setActiveTab(tabIndex);
    };

    
  return (
    <>
       <TabContainer>
        <Tab active={activeTab === 1} onClick={() => handleTabClick(1)}>
          Tab 1
        </Tab>
        <Tab active={activeTab === 2} onClick={() => handleTabClick(2)}>
          Tab 2
        </Tab>
        <Tab active={activeTab === 3} onClick={() => handleTabClick(3)}>
          Tab 3
        </Tab>
      </TabContainer>

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

export default TabsApp
