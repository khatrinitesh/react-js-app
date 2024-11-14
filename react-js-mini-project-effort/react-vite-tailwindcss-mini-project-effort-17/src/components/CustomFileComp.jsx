import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
    
    const CustomFileComp = () => {
      return (
        <>
          <CustomFileUpload/>
        </>
      );
    }
    
    export default CustomFileComp;


const CustomFileUpload = () => {
    const [file, setFile] = useState(null);
    const [isDragging, setIsDragging] = useState(false);
  
    const handleFileChange = (event) => {
      const selectedFile = event.target.files[0];
      if (selectedFile) {
        setFile(selectedFile);
      }
    };
  
    const handleDragEnter = (event) => {
      event.preventDefault();
      setIsDragging(true);
    };
  
    const handleDragLeave = (event) => {
      event.preventDefault();
      setIsDragging(false);
    };
  
    const handleDrop = (event) => {
      event.preventDefault();
      setIsDragging(false);
      const droppedFile = event.dataTransfer.files[0];
      if (droppedFile) {
        setFile(droppedFile);
      }
    };
  
    return (
      <Container>
        <UploadWrapper
          onDragEnter={handleDragEnter}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          isDragging={isDragging}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <UploadText>
              {file ? (
                <span>File: {file.name}</span>
              ) : (
                <span>Drag & drop a file here, or click to select</span>
              )}
            </UploadText>
  
            <motion.input
              type="file"
              onChange={handleFileChange}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{ display: 'none' }}
            />
            <StyledButton
              as="label"
              htmlFor="file-input"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Browse Files
            </StyledButton>
          </motion.div>
        </UploadWrapper>
  
        {file && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <FileDetails>
              <p>Selected File: {file.name}</p>
              <p>Size: {Math.round(file.size / 1024)} KB</p>
            </FileDetails>
          </motion.div>
        )}
      </Container>
    );
  };

  // Styled Components

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: 100vh;
background-color: #f7f9fc;
`;

const UploadWrapper = styled.div`
width: 400px;
height: 200px;
display: flex;
justify-content: center;
align-items: center;
border: 2px dashed ${(props) => (props.isDragging ? '#3498db' : '#ccc')};
background-color: ${(props) => (props.isDragging ? '#eaf6ff' : '#fff')};
border-radius: 10px;
box-shadow: ${(props) =>
  props.isDragging ? '0 0 10px rgba(52, 152, 219, 0.5)' : '0 0 8px rgba(0, 0, 0, 0.1)'};
cursor: pointer;
padding: 20px;
transition: all 0.3s ease;
`;

const UploadText = styled.div`
font-size: 16px;
color: #555;
text-align: center;

span {
  font-weight: 600;
  color: #3498db;
}
`;

const StyledButton = styled(motion.button)`
background-color: #3498db;
color: #fff;
border: none;
padding: 10px 20px;
border-radius: 5px;
font-size: 16px;
cursor: pointer;
margin-top: 20px;
transition: background-color 0.3s ease;

&:hover {
  background-color: #2980b9;
}
`;

const FileDetails = styled.div`
margin-top: 20px;
background-color: #fff;
border-radius: 8px;
padding: 20px;
width: 400px;
box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

p {
  font-size: 14px;
  color: #333;
  margin: 5px 0;
}
`;