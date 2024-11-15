import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const EqualHeightComp = () => {
  return (
    <>
    <EqualHeight/>
    </>
  )
};

export default EqualHeightComp;

const EqualHeight = () => {
  return (
    <>
      <PageContainer>
        <ContentWrapper>
            {/* column 1 */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Column>
              <h2>Column 1</h2>
              <p>
                This is some content in the first column. It's a bit longer than
                the second column.
              </p>
              <p>Additional content here to make this column longer.</p>
            </Column>
          </motion.div>
            {/* column 2 */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Column>
              <h2>Column 2</h2>
              <p>This is some content in the second column.</p>
            </Column>
          </motion.div>
        </ContentWrapper>
      </PageContainer>
    </>
  );
};

// Styled Components
const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f5f5f5;
  
`;

const ContentWrapper = styled.div`
  display: flex;
  gap: 20px;
  width: 80%;
  max-width: 1200px;
  @media (max-width:767px){
    flex-direction: column;
  }
`;

const Column = styled.div`
  flex: 1;  /* Equal flex for equal width */
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  min-height: 200px;  /* Ensure the columns have a minimum height */
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 10px;

  h2 {
    font-size: 24px;
    margin-bottom: 10px;
    color: #333;
  }

  p {
    color: #666;
    font-size: 16px;
    line-height: 1.6;
  }
`;
