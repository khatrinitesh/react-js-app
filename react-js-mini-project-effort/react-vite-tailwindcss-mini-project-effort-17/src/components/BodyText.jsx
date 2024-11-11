import React from 'react';
import styled from 'styled-components';

const BodyTextStyled = styled.p`
  font-size: 18px;
  line-height: 1.6;
  color: #333;
  font-family: 'Arial', sans-serif;
  margin-bottom: 15px;
`;


const BodyText = () => {
  return (
    <>
       <div>
      <h1>Welcome to My Blog</h1>
      <BodyTextStyled>
        This is an example of body text with styled-components in React.
      </BodyTextStyled>
      <BodyTextStyled>
        React allows you to compose UI elements easily. With its component-based architecture, you can create reusable elements
        like buttons, forms, and text sections, all of which can be styled using CSS or inline styles.
      </BodyTextStyled>
    </div>
    </>
  );
}

export default BodyText;
