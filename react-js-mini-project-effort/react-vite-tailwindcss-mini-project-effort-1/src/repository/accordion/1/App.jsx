import React, { useState } from 'react';

const AccordionApp = () => {

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

  return (
    <>
      {sections.map((section) => (
        <div key={section.id}>
          <div
            onClick={() => toggleSection(section.id)}
            style={{ cursor: 'pointer', padding: '10px', background: '#f0f0f0', marginBottom: '5px' }}
          >
            {section.title}
          </div>
          {section.isOpen && <div style={{ padding: '10px', background: '#e0e0e0' }}>{section.content}</div>}
        </div>
      ))}
    </>
  )
}

export default AccordionApp
