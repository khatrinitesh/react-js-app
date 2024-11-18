import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const FloatingImagesLeftRightWrapComp = () => {
  return (
    <>
      <FloatingImages/>
    </>
  );
}

export default FloatingImagesLeftRightWrapComp;


// Styled container to manage the layout
const Wrapper = styled.div`
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
  font-family: 'Arial', sans-serif;
`;

// Styled text container
const TextContainer = styled.div`
  font-size: 18px;
  line-height: 1.6;
`;

// Floating image with left or right positioning
const FloatingImage = styled(motion.img)`
  max-width: 300px;
  margin: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  float: ${(props) => (props.float === 'left' ? 'left' : 'right')};
  margin-${(props) => (props.float === 'left' ? 'right' : 'left')}: 20px;
  margin-bottom: 20px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

// Main content component
const FloatingImages = () => {
    return (
      <Wrapper>
        <h1>Floating Images with Wrapping Text</h1>
        <TextContainer>
          <p>
            This is an example of how images can float to the left or right, and the text will wrap around them. This effect is useful for creating a more dynamic and engaging layout, commonly used in blog posts, articles, or any content-heavy design. The images will have some interactive hover effects that will enlarge slightly to provide a more visual interaction.
          </p>
  
          <FloatingImage
            src="https://via.placeholder.com/300x200"
            alt="Example Image"
            float="left"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          />
  
          <p>
            The image above floats to the left side of the text, allowing the text to wrap around it naturally. You can position images to the left or right side, and they will automatically adjust to allow text to flow around them. This gives the design a more organic feel, as if the text is interacting with the images in a visually appealing way.
          </p>
  
          <FloatingImage
            src="https://via.placeholder.com/300x200"
            alt="Example Image"
            float="right"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          />
  
          <p>
            Similarly, the second image floats to the right, and the text wraps around it. This creates a dynamic, interactive layout where content and images blend seamlessly. You can adjust the size of the images, the amount of text, and the margins to suit your specific design needs.
          </p>
  
          <p>
            Floating images can enhance the visual appeal of your website or blog and can be easily integrated with ReactJS, Framer Motion, and Styled Components to make the interaction smooth and elegant.
          </p>
        </TextContainer>
      </Wrapper>
    );
  };




