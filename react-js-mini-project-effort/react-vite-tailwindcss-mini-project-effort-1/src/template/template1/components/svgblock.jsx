import React from "react";
import styled from "styled-components";
import SvgIcon from "../assets/arrow-up.svg";

const Rb = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40%;
  position: relative;
  /* z-index: 10; */
  svg {
    width: 100%;
    height: auto;
  }
  @media only Screen and (max-width: 48em) {
    display: none;
  }
`;

const SvgBlock = ({ svg }) => {
  //console.log(SvgIcon);
  return (
    <Rb id="svgBlock">
      <img  src={SvgIcon} alt="Services" />
    </Rb>
  );
};

export default SvgBlock;