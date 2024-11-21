import React, { useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { imagesAccordion } from "../constants/imgaccData";

const ImgAccComp = () => {
  return (
    <>
    <ImageAccordion/>
    </>
  )
};

export default ImgAccComp;

// Styled Components for styling the accordion
const AccordionContainer = styled.div`
  width: 300px;
  margin: 0 auto;
`;

const AccordionItem = styled.div`
  margin: 10px 0;
  cursor: pointer;
  border: 2px solid #ccc;
  border-radius: 8px;
  overflow: hidden;
`;

const ImageContainer = styled(motion.div)`
  width: 100%;
  height: 200px;
  overflow: hidden;
  border-radius: 8px;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Caption = styled.div`
  padding: 10px;
  text-align: center;
  background-color: #f4f4f4;
  font-weight: bold;
`;

const ImageAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (toggle) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <>
      <AccordionContainer>
        {imagesAccordion.map((image, index) => (
          <AccordionItem key={index} onClick={() => handleToggle(index)}>
            <ImageContainer
              initial={{ height: 0 }}
              animate={{
                height: activeIndex === index ? 200 : 0,
              }}
              transition={{ duration: 0.5 }}
            >
              <Image src={image.src} alt={image.caption} />
            </ImageContainer>
            <Caption>{image.caption}</Caption>
          </AccordionItem>
        ))}
      </AccordionContainer>
    </>
  );
};
