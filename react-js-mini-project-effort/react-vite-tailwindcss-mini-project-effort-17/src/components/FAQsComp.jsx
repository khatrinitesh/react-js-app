import React, { useState } from 'react';
// library
import styled from 'styled-components';
import { motion,AnimatePresence } from 'framer-motion';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
// constants data
import { faqData } from "../constants/faqsData";

const FAQsComp = () => {
  return (
    <>
      <QAFAQ />
    </>
  );
};

export default FAQsComp;

const QAFAQ = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleActive = (index) => {
    // toggle the active FAQ item
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <>
       (
        <FAQContainer>
      <FAQTitle>Frequently Asked Questions</FAQTitle>
      {faqData.map((item, index) => (
        <FAQItem key={index}>
          <Question onClick={() => handleActive(index)}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 200 }}
            >
              {item.question}
            </motion.div>
            <motion.div>
              {activeIndex === index ? (
                <FaChevronUp size={20} />
              ) : (
                <FaChevronDown size={20} />
              )}
            </motion.div>
          </Question>

          <AnimatePresence>
            {activeIndex === index && (
              <Answer
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.5 }}
              >
                {item.answer}
              </Answer>
            )}
          </AnimatePresence>
        </FAQItem>
      ))}
    </FAQContainer>
    </>
  );
};

// Styled Components for FAQ layout and design
const FAQContainer = styled.div`
  max-width: 800px;
  margin: 50px auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
`;

const FAQTitle = styled.h2`
  text-align: center;
  font-size: 28px;
  margin-bottom: 20px;
`;

const FAQItem = styled.div`
  margin-bottom: 15px;
`;

const Question = styled.div`
  background-color: #fff;
  padding: 15px;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    background-color: #efefef;
  }

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Answer = styled(motion.div)`
  background-color: #f2f2f2;
  padding: 15px;
  font-size: 16px;
  margin-top: 10px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
`;