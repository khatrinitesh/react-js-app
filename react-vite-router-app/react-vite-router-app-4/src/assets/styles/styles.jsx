import styled, { css } from 'styled-components';
import BgPattern from "../images/bgpattern.jpg";


export const Button = styled.button`
  color: #fff;
  padding:10px;
  border-radius: 10px 10px 20px 20px;
  border:3px solid pink;
  background: url(${BgPattern}) no-repeat center/cover;
`;

export const HeaderFooterComponent = styled.header`
  background-color: black;
  padding:10px;
  color:#fff;
`

export const StyledButton = styled.button`
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  font-size: 16px;
  background-color: blue;
  color: white;
  ${props =>
    props.variant === 'outline' &&
    css`
      background-color: transparent;
      border: 2px solid blue;
      color: blue;
    `}

  ${props =>
    props.disabled &&
    css`
      opacity: 0.5;
      pointer-events: none;
    `}
`;
