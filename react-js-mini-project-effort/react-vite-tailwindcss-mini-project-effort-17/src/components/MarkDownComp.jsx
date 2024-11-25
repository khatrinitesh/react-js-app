import React, { useState } from 'react';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';

const MarkDownComp = () => {
  return (
    <>
      <MarkdownEditor/>
    </>
  );
}

export default MarkDownComp;

// Styled components
const EditorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  margin: 0 auto;
  width: 80%;
  max-width: 800px;
  border-radius: 10px;
  background-color: #f7f7f7;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 200px;
  padding: 10px;
  margin-bottom: 20px;
  font-size: 16px;
  line-height: 1.5;
  border-radius: 5px;
  border: 1px solid #ccc;
  box-sizing: border-box;
  font-family: 'Arial', sans-serif;
`;

const OutputContainer = styled.div`
  width: 100%;
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  border: 1px solid #ccc;
  box-sizing: border-box;
  font-family: 'Arial', sans-serif;
`;

const MarkdownEditor = () => {
    const [markdown, setMarkdown] = useState('');
  
    const handleChange = (e) => {
      setMarkdown(e.target.value);
    };
  
    return (
      <EditorContainer>
        <h1>Markdown Editor</h1>
        <TextArea
          value={markdown}
          onChange={handleChange}
          placeholder="Type your markdown here..."
        />
        <OutputContainer>
          <ReactMarkdown>{markdown}</ReactMarkdown>
        </OutputContainer>
      </EditorContainer>
    );
  }

