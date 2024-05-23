import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const AccordionContainer = styled.div`
  width: 300px;
  margin: auto;
`;

const Section = styled.div`
  cursor: pointer;
  padding: 10px;
  background: #f0f0f0;
  margin-bottom: 5px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e0e0e0;
  }
`;

const Content = styled.div`
  padding: 10px;
  background: #e0e0e0;
  transition: max-height 0.3s ease-in-out;
  overflow: hidden;

  ${({ isOpen }) => (isOpen ? 'max-height: 200px;' : 'max-height: 0;')}
`;

const AccordionApp = () => {
  return (
    <>
      <AnimatedAccordion/>
    </>
  )
}

export default AccordionApp

const AnimatedAccordion = () => {
    const [sections, setSections] = useState([
      { id: 1, title: 'Section 1', content: 'Content for Section 1', isOpen: false },
      { id: 2, title: 'Section 2', content: 'Content for Section 2', isOpen: false },
      { id: 3, title: 'Section 3', content: 'Content for Section 3', isOpen: false },
    ]);
  
    const toggleSection = (id) => {
      setSections((prevSections) =>
        prevSections.map((section) =>
          section.id === id ? { ...section, isOpen: !section.isOpen } : section
        )
      );
    };
  
    useEffect(() => {
      // You can add additional logic here if needed when sections change
    }, [sections]);
  
    return (
      <AccordionContainer>
        {sections.map((section) => (
          <div key={section.id}>
            <Section onClick={() => toggleSection(section.id)}>{section.title}</Section>
            <Content isOpen={section.isOpen}>{section.content}</Content>
          </div>
        ))}
      </AccordionContainer>
    );
  };
  
